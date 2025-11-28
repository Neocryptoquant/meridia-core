use anchor_lang::prelude::*;
use super::trade::CommodityType;

#[account]
pub struct SettlementTrigger {
    pub authority: Pubkey,
    pub commodity_type: CommodityType,
    pub quantity: u64,
    pub quality_hash: [u8; 32],
    pub location_geohash: [u8; 8],
    pub proof_type: ProofType,
    pub timestamp: i64,
    pub is_used: bool,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Copy, PartialEq, Eq)]
pub enum ProofType {
    IoTSig,
    EBLNFT,
    PipelineFlow,
}
