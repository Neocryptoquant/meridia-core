use anchor_lang::prelude::*;
use crate::state::*;

#[derive(Accounts)]
pub struct IngestTrigger<'info> {
    #[account(init, payer = authority, space = 8 + 32 + 1 + 8 + 32 + 8 + 1 + 8 + 1)]
    pub trigger: Account<'info, SettlementTrigger>,
    #[account(mut)]
    pub authority: Signer<'info>, // Oracle Authority
    pub system_program: Program<'info, System>,
}

pub fn handler(
    ctx: Context<IngestTrigger>,
    commodity_type: CommodityType,
    quantity: u64,
    quality_hash: [u8; 32],
    location_geohash: [u8; 8],
    proof_type: ProofType,
    timestamp: i64,
) -> Result<()> {
    let trigger = &mut ctx.accounts.trigger;
    trigger.authority = ctx.accounts.authority.key();
    trigger.commodity_type = commodity_type;
    trigger.quantity = quantity;
    trigger.quality_hash = quality_hash;
    trigger.location_geohash = location_geohash;
    trigger.proof_type = proof_type;
    trigger.timestamp = timestamp;
    trigger.is_used = false;
    Ok(())
}
