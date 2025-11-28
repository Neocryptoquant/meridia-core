use anchor_lang::prelude::*;

#[account]
pub struct CommodityTrade {
    pub buyer: Pubkey,
    pub seller: Pubkey,
    pub quantity: u64,
    pub price_per_unit: u64,
    pub commodity_type: CommodityType,
    pub status: TradeStatus,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Copy, PartialEq, Eq)]
pub enum CommodityType {
    BrentCrude,
    NaturalGasHenryHub,
    SolarPower,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Copy, PartialEq, Eq)]
pub enum TradeStatus {
    Open,
    Matched,
    Settled,
    Disputed,
}
