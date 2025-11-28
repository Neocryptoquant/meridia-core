use anchor_lang::prelude::*;

#[error_code]
pub enum MeridiaError {
    #[msg("Trade is not in Matched status")]
    TradeNotMatched,
    #[msg("Trigger has already been used")]
    TriggerAlreadyUsed,
    #[msg("Commodity Type mismatch")]
    CommodityMismatch,
    #[msg("Insufficient Quantity in Trigger")]
    InsufficientQuantity,
}
