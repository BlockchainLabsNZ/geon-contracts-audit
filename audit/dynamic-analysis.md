# Dynamic Analysis
Performed by Blockchain Labs, 9 Oct, 2018

```
   Contract: GEONBabyToken
    √ should have 18 decimals
    √ should have the ability to mint tokens (175ms)
    √ should start paused to prevent transfers (137ms)
    √ should have the ability to un-pause trading (421ms)
    √ should allow burning tokens (162ms)
    √ should allow setting a public token for redemptions (275ms)
    √ should allow redemptions (1062ms)
    √ should prevent redeeming tokens above the max amount (753ms)
    √ should not have vested balance before starting redemptions (131ms)
    √ should allow the owner to destroy the contract (377ms)
    √ should prevent double redeeming (2500ms)
    during redemptions
      √ should vest 20% on the 1st day (147ms)
      √ should vest 40% after 90 days (138ms)
      √ should vest 60% after 180 days (136ms)
      √ should vest 80% after 270 days (126ms)
      √ should vest 100% after 360 days (131ms)

  Contract: GEONToken
    √ should have GEON symbol
    √ should have 18 decimals
    √ should have the ability to mint tokens (82ms)
    √ should pause (75ms)

  Contract: MigrateBalanceToken
    √ should assign temporary supply to last version (64ms)
    √ should answer if investor has migrated (46ms)
    √ should add total supply from last version
    √ should not double count supply (148ms)
    √ should count the balance from last version (49ms)
    √ should not migrate balance multiple times (252ms)
    √ should allow anyone to batch migrate accounts (166ms)
    √ should allow transfer (351ms)
    √ should allow approve and transfer from (303ms)

  Contract: TokenFallbackToken
    √ should prevent token fallback from random accounts
    √ should prevent the message sender is not last version of token
    √ should allow erc223 transfers (249ms)
    after upgrade transfer
      √ should update balance on new token
      √ should burn the transaction amount from old token
      √ should decrease old token supply
      √ should increase new token supply


  36 passing (25s)

```
