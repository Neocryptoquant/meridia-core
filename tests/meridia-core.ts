import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { MeridiaCore } from "../target/types/meridia_core";
import { assert } from "chai";

describe("meridia-core", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.MeridiaCore as Program<MeridiaCore>;

  let tradeAccount = anchor.web3.Keypair.generate();
  let triggerAccount = anchor.web3.Keypair.generate();
  let buyer = provider.wallet;
  let oracle = provider.wallet;

  const COMMODITY_TYPE = { brentCrude: {} };
  const PROOF_TYPE = { ioTSig: {} };

  it("Places an Order", async () => {
    const quantity = new anchor.BN(1000);
    const price = new anchor.BN(5000); // $50.00

    try {
      const tx = await program.methods
        .placeOrder(quantity, price, COMMODITY_TYPE)
        .accounts({
          trade: tradeAccount.publicKey,
          buyer: buyer.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .instruction();

      const transaction = new anchor.web3.Transaction().add(tx);
      await anchor.web3.sendAndConfirmTransaction(provider.connection, transaction, [buyer.payer, tradeAccount]);

      const trade = await program.account.commodityTrade.fetch(tradeAccount.publicKey);
      assert.ok(trade.quantity.eq(quantity));
      assert.ok(trade.status.open);
    } catch (e) {
      console.log("Place Order Error:", e);
      throw e;
    }
  });

  it("Ingests a Trigger (Oracle)", async () => {
    const quantity = new anchor.BN(1000);
    const qualityHash = Array(32).fill(1);
    const locationGeohash = Array(8).fill(1);
    const timestamp = new anchor.BN(Date.now());

    try {
      const tx = await program.methods
        .ingestTrigger(
          COMMODITY_TYPE,
          quantity,
          qualityHash,
          locationGeohash,
          PROOF_TYPE,
          timestamp
        )
        .accounts({
          trigger: triggerAccount.publicKey,
          authority: oracle.publicKey,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .instruction();

      const transaction = new anchor.web3.Transaction().add(tx);
      await anchor.web3.sendAndConfirmTransaction(provider.connection, transaction, [oracle.payer, triggerAccount]);

      const trigger = await program.account.settlementTrigger.fetch(triggerAccount.publicKey);
      assert.ok(trigger.quantity.eq(quantity));
      assert.ok(!trigger.isUsed);
    } catch (e) {
      console.log("Ingest Trigger Error:", e);
      throw e;
    }
  });

  it("Settles the Trade", async () => {
    try {
      const tx = await program.methods
        .settleTrade()
        .accounts({
          trade: tradeAccount.publicKey,
          trigger: triggerAccount.publicKey,
        })
        .instruction();

      const transaction = new anchor.web3.Transaction().add(tx);
      await anchor.web3.sendAndConfirmTransaction(provider.connection, transaction, [buyer.payer]);

      assert.fail("Should have failed because trade is OPEN");
    } catch (e) {
      console.log("Settle Trade Error Message:", e.message);
      // We expect an error because the trade is OPEN, not MATCHED.
      // The error might be "TradeNotMatched" (custom) or "Constraint..." (if using constraints)
      // In our library, we used require!(trade.status == TradeStatus::Matched, MeridiaError::TradeNotMatched);
      // So we expect "TradeNotMatched" or the error code.
      assert.include(e.message, "TradeNotMatched");
    }
  });
});
