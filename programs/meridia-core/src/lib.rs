use anchor_lang::prelude::*;

pub mod error;
pub mod instructions;
pub mod libraries;
pub mod state;

use instructions::ix_ingest_trigger::*;
use instructions::ix_place_order::*;
use instructions::ix_settle_trade::*;
use state::*;

declare_id!("BYE3U4QckF1Mhhi5T6Gzeny4s1t22E19u8QgPppQx9tr");

#[program]
pub mod meridia_core {
    use super::*;

    pub fn place_order(
        ctx: Context<PlaceOrder>,
        quantity: u64,
        price_per_unit: u64,
        commodity_type: CommodityType,
    ) -> Result<()> {
        instructions::ix_place_order::handler(ctx, quantity, price_per_unit, commodity_type)
    }

    pub fn ingest_trigger(
        ctx: Context<IngestTrigger>,
        commodity_type: CommodityType,
        quantity: u64,
        quality_hash: [u8; 32],
        location_geohash: [u8; 8],
        proof_type: ProofType,
        timestamp: i64,
    ) -> Result<()> {
        instructions::ix_ingest_trigger::handler(
            ctx,
            commodity_type,
            quantity,
            quality_hash,
            location_geohash,
            proof_type,
            timestamp,
        )
    }

    pub fn settle_trade(ctx: Context<SettleTrade>) -> Result<()> {
        instructions::ix_settle_trade::handler(ctx)
    }
}
