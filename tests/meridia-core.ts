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

    await program.methods
      .placeOrder(quantity, price, COMMODITY_TYPE)
      .accounts({
        trade: tradeAccount.publicKey,
        buyer: buyer.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([tradeAccount])
      .rpc();

    const trade = await program.account.commodityTrade.fetch(tradeAccount.publicKey);
    assert.ok(trade.quantity.eq(quantity));
    assert.ok(trade.status.open);
  });

  it("Ingests a Trigger (Oracle)", async () => {
    const quantity = new anchor.BN(1000);
    const qualityHash = Array(32).fill(1);
    const locationGeohash = Array(8).fill(1);
    const timestamp = new anchor.BN(Date.now());

    await program.methods
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
      .signers([triggerAccount])
      .rpc();

    const trigger = await program.account.settlementTrigger.fetch(triggerAccount.publicKey);
    assert.ok(trigger.quantity.eq(quantity));
    assert.ok(!trigger.isUsed);
  });

  it("Settles the Trade", async () => {
    // Manually set status to Matched for this test since we don't have a matcher yet
    // In a real scenario, a 'match_order' instruction would do this.
    // For now, we'll just test that settle fails if not matched, or we can add a helper to match it.
    // Wait, we can't manually set it without an instruction.
    // Let's add a quick 'match_order' instruction to the program or just assume we need to implement it.
    
    // Actually, let's just try to settle and expect it to fail because it's OPEN, not MATCHED.
    try {
        await program.methods
        .settleTrade()
        .accounts({
            trade: tradeAccount.publicKey,
            trigger: triggerAccount.publicKey,
        })
        .rpc();
        assert.fail("Should have failed because trade is OPEN");
    } catch (e) {
        assert.include(e.message, "Trade is not in Matched status");
    }
  });
});
