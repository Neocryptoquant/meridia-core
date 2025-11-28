use anchor_lang::prelude::*;
use crate::state::*;
use crate::libraries::SettlementMath;

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

    // Use Library for Verification (Raydium Style)
    SettlementMath::verify_settlement(trade, trigger)?;

    // Update State
    trade.status = TradeStatus::Settled;
    trigger.is_used = true;

    Ok(())
}
