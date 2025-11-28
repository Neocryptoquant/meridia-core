use anchor_lang::prelude::*;
use crate::state::*;
use crate::error::MeridiaError;

#[derive(Accounts)]
pub struct SettleTrade<'info> {
    #[account(mut)]
    pub trade: Account<'info, CommodityTrade>,
    #[account(mut)]
    pub trigger: Account<'info, SettlementTrigger>,
}

pub fn handler(ctx: Context<SettleTrade>) -> Result<()> {
    let trade = &mut ctx.accounts.trade;
    let trigger = &mut ctx.accounts.trigger;

    // Basic Verification Logic
    require!(trade.status == TradeStatus::Matched, MeridiaError::TradeNotMatched);
    require!(!trigger.is_used, MeridiaError::TriggerAlreadyUsed);
    require!(trade.commodity_type == trigger.commodity_type, MeridiaError::CommodityMismatch);
    require!(trigger.quantity >= trade.quantity, MeridiaError::InsufficientQuantity);

    // In a real implementation, we would transfer funds here.
    // For MVP, we just mark as Settled.
    trade.status = TradeStatus::Settled;
    trigger.is_used = true;

    Ok(())
}
