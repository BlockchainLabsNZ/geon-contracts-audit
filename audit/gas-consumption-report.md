# Gas consumption report
Performed by Blockchain Labs, 9 Oct, 2018


```
   Contract: GEONBabyToken
    √ should have 18 decimals
    √ should have the ability to mint tokens (68760 gas)
    √ should start paused to prevent transfers (92817 gas)
    √ should have the ability to un-pause trading (195584 gas)
    √ should allow burning tokens (86985 gas)
    √ should allow setting a public token for redemptions (3270408 gas)
    √ should allow redemptions (3559818 gas)
    √ should prevent redeeming tokens above the max amount (3526509 gas)
    √ should not have vested balance before starting redemptions (68760 gas)
    √ should allow the owner to destroy the contract (3306852 gas)
    √ should prevent double redeeming (3799420 gas)
    during redemptions
      √ should vest 20% on the 1st day
      √ should vest 40% after 90 days
      √ should vest 60% after 180 days
      √ should vest 80% after 270 days
      √ should vest 100% after 360 days

  Contract: MigrateBalanceToken
    √ should assign temporary supply to last version
    √ should answer if investor has migrated
    √ should add total supply from last version
    √ should not double count supply (61713 gas)
    √ should count the balance from last version
    √ should not migrate balance multiple times (85270 gas)
    √ should allow anyone to batch migrate accounts (62447 gas)
    √ should allow transfer (75257 gas)
    √ should allow approve and transfer from (113465 gas)

  Contract: GEONToken
    √ should have GEON symbol
    √ should have 18 decimals
    √ should have the ability to mint tokens (68738 gas)
    √ should pause (43405 gas)

  Contract: TokenFallbackToken
    √ should prevent token fallback from random accounts
    √ should prevent the message sender is not last version of token
    √ should allow erc223 transfers (71433 gas)
    after upgrade transfer
      √ should update balance on new token
      √ should burn the transaction amount from old token
      √ should decrease old token supply
      √ should increase new token supply

·-----------------------------------------------------------------------------|----------------------------·
|                                     Gas                                     ·  Block limit: 6721975 gas  │
·············································|································|·····························
|  Methods                                   ·          21 gwei/gas           ·       227.39 chf/eth       │
························|····················|·········|··········|···········|··············|··············
|  Contract             ·  Method            ·  Min    ·  Max     ·  Avg      ·  # calls     ·  chf (avg)  │
························|····················|·········|··········|···········|··············|··············
|  GEONBabyToken        ·  approve           ·      -  ·       -  ·    45621  ·           1  ·       0.22  │
························|····················|·········|··········|···········|··············|··············
|  GEONBabyToken        ·  burn              ·      -  ·       -  ·    18225  ·           1  ·       0.09  │
························|····················|·········|··········|···········|··············|··············
|  GEONBabyToken        ·  destroy           ·      -  ·       -  ·    13974  ·           1  ·       0.07  │
························|····················|·········|··········|···········|··············|··············
|  GEONBabyToken        ·  mint              ·      -  ·       -  ·    68760  ·           8  ·       0.33  │
························|····················|·········|··········|···········|··············|··············
|  GEONBabyToken        ·  redeem            ·  59526  ·  120037  ·    84789  ·           3  ·       0.40  │
························|····················|·········|··········|···········|··············|··············
|  GEONBabyToken        ·  startRedemptions  ·      -  ·       -  ·    54719  ·           5  ·       0.26  │
························|····················|·········|··········|···········|··············|··············
|  GEONBabyToken        ·  transfer          ·      -  ·       -  ·    37383  ·           1  ·       0.18  │
························|····················|·········|··········|···········|··············|··············
|  GEONBabyToken        ·  transferFrom      ·      -  ·       -  ·    29707  ·           1  ·       0.14  │
························|····················|·········|··········|···········|··············|··············
|  GEONBabyToken        ·  unpause           ·      -  ·       -  ·    14113  ·           1  ·       0.07  │
························|····················|·········|··········|···········|··············|··············
|  GEONToken            ·  addMinter         ·      -  ·       -  ·    46765  ·           3  ·       0.22  │
························|····················|·········|··········|···········|··············|··············
|  GEONToken            ·  approve           ·  45557  ·   45621  ·    45600  ·           3  ·       0.22  │
························|····················|·········|··········|···········|··············|··············
|  GEONToken            ·  mint              ·      -  ·       -  ·    68738  ·           4  ·       0.33  │
························|····················|·········|··········|···········|··············|··············
|  GEONToken            ·  pause             ·      -  ·       -  ·    43405  ·           1  ·       0.21  │
························|····················|·········|··········|···········|··············|··············
|  GEONToken            ·  transfer          ·      -  ·       -  ·    71433  ·           1  ·       0.34  │
························|····················|·········|··········|···········|··············|··············
|  MigrateBalanceToken  ·  approve           ·      -  ·       -  ·    83960  ·           1  ·       0.40  │
························|····················|·········|··········|···········|··············|··············
|  MigrateBalanceToken  ·  batchMigrate      ·      -  ·       -  ·    62447  ·           1  ·       0.30  │
························|····················|·········|··········|···········|··············|··············
|  MigrateBalanceToken  ·  migrate           ·  23557  ·   61713  ·    48994  ·           3  ·       0.23  │
························|····················|·········|··········|···········|··············|··············
|  MigrateBalanceToken  ·  transfer          ·      -  ·       -  ·    75257  ·           1  ·       0.36  │
························|····················|·········|··········|···········|··············|··············
|  MigrateBalanceToken  ·  transferFrom      ·      -  ·       -  ·    29505  ·           1  ·       0.14  │
························|····················|·········|··········|···········|··············|··············
|  Deployments                               ·                                ·  % of limit  ·             │
·············································|·········|··········|···········|··············|··············
|  GEONBabyToken                             ·      -  ·       -  ·  3510522  ·      52.2 %  ·      16.76  │
·············································|·········|··········|···········|··············|··············
|  GEONToken                                 ·      -  ·       -  ·  3215689  ·      47.8 %  ·      15.36  │
·············································|·········|··········|···········|··············|··············
|  MigrateBalanceToken                       ·      -  ·       -  ·  1768990  ·      26.3 %  ·       8.45  │
·············································|·········|··········|···········|··············|··············
|  TokenFallbackToken                        ·      -  ·       -  ·  1386495  ·      20.6 %  ·       6.62  │
·--------------------------------------------|---------|----------|-----------|--------------|-------------·

  36 passing (6m)
```




<br>

## Summary  
Upon finalization of the contracts to be used by **GEON**, the contracts were assessed on the gas usage of each function to ensure there aren't any unforeseen issues with exceeding the block size GasLimit.

<br>
