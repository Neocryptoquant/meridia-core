use anchor_lang::prelude::*;
use crate::error::MeridiaError;
use crate::state::{CommodityTrade, SettlementTrigger, TradeStatus};

pub struct SettlementMath;

impl SettlementMath {
    pub fn verify_settlement(
        trade: &CommodityTrade,
        trigger: &SettlementTrigger,
    ) -> Result<()> {
        require!(trade.status == TradeStatus::Matched, MeridiaError::TradeNotMatched);
        require!(!trigger.is_used, MeridiaError::TriggerAlreadyUsed);
        require!(trade.commodity_type == trigger.commodity_type, MeridiaError::CommodityMismatch);
        require!(trigger.quantity >= trade.quantity, MeridiaError::InsufficientQuantity);
        Ok(())
    }
}
