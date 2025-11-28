use anchor_lang::prelude::*;
use crate::state::*;

#[derive(Accounts)]
pub struct PlaceOrder<'info> {
    #[account(init, payer = buyer, space = 8 + 32 + 32 + 8 + 8 + 1 + 1)]
    pub trade: Account<'info, CommodityTrade>,
    #[account(mut)]
    pub buyer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

pub fn handler(
    ctx: Context<PlaceOrder>,
    quantity: u64,
    price_per_unit: u64,
    commodity_type: CommodityType,
) -> Result<()> {
    let trade = &mut ctx.accounts.trade;
    trade.buyer = ctx.accounts.buyer.key();
    trade.seller = Pubkey::default(); // Open order
    trade.quantity = quantity;
    trade.price_per_unit = price_per_unit;
    trade.commodity_type = commodity_type;
    trade.status = TradeStatus::Open;
    Ok(())
}
