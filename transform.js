// Just copy paste the vaults from our frontend vaults.
// Use the regex expression `.*token..*` with the regex matcher activated on VSCode
// to replace undefined vars, we're looking to `token` in our case.
// BE SURE TO REPLACE IT ONLY ON THE `transform.js` FILE.

// Call it with `node transform.js` 

const fs = require("fs")

const vaults = getVaults()

// Modify the output filename and the jar addresse chainId as needed
fs.writeFileSync(
    'ftm_vault_addresses.json',
    JSON.stringify(
        vaults.map(e=> ({
            vault:e.jarAddresses['250'],
            "__comment":`${e.platform} ${e.lpSymbol}`
        }))
    )
 )

function getVaults(){
    return [
        {
          pid: 35,
          lpSymbol: 'Beets-USDC LP',
          lpAddresses: {
            80001: '',
            250: '0x03c6B3f09D2504606936b1A4DeCeFaD204687890',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 0,
          jarAddresses: {
            80001: '',
            250: '0xc8A4D5611F31f943eC22cd07C7078b7E4d4B9161',
          },



          rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
          poolWeightDesignate: 150 / 832,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          kogefarmComment: ' (Beets)',
          isBeethoven: true,
        },
      
      
        {
          pid: 43,
          lpSymbol: 'Beets-wFTM LP',
          lpAddresses: {
            80001: '',
            250: '0xcdE5a11a4ACB4eE4c805352Cec57E236bdBC3837',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 9,
          jarAddresses: {
            80001: '',
            250: '0xC9f625e17650F69CA877f016aa2e9BfEC17D3Ed5',
          },



          rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
          poolWeightDesignate: 250 / 832,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          kogefarmComment: ' (Beets)',
          isBeethoven: true
        },
      
        {
          pid: 44,
          lpSymbol: 'Mai-USDC LP',
          lpAddresses: {
            80001: '',
            250: '0x2ed55f12e700CdE978E1F0491D681919814ca44B',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 11,
          jarAddresses: {
            80001: '',
            250: '0x7F5Fd897a936A9E4D40C2560c45f5600a43cb409',
          },



          rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
          poolWeightDesignate: 5 / 832,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          kogefarmComment: ' (Beets)',
          isBeethoven: true
        },
      
        {
          pid: 36,
          lpSymbol: 'wFTM-BTC-ETH LP',
          lpAddresses: {
            80001: '',
            250: '0xd47D2791d3B46f9452709Fa41855a045304D6f9d',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 1,
          jarAddresses: {
            80001: '',
            250: '0xdFdd4e400B429979b774F8f0a1d106A3448350bC',
          },



          rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
          poolWeightDesignate: 80 / 832,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          kogefarmComment: ' (Beets)',
          isBeethoven: true,
        },
      
        {
          pid: 37,
          lpSymbol: 'wFTM-Sonata',
          lpAddresses: {
            80001: '',
            250: '0xf0e2c47d4C9FBBbc2F2E19ACdaA3c773A3ECD221',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 3,
          jarAddresses: {
            80001: '',
            250: '0xf58d2F9A4c1F6b469Df1E77DAD99C0B99e82a722',
          },



          rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
          poolWeightDesignate: 70 / 832,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          kogefarmComment: ' (Beets)',
          isBeethoven: true
        },
      
        {
          pid: 38,
          lpSymbol: 'USDC-Eth LP',
          lpAddresses: {
            80001: '',
            250: '0xA07De66AeF84e2c01D88a48D57D1463377Ee602b',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 4,
          jarAddresses: {
            80001: '',
            250: '0x380DF95878feF749b19E468Ef4C1698a224a8990',
          },



          rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
          poolWeightDesignate: 31 / 832,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          kogefarmComment: ' (Beets)',
          isBeethoven: true
        },
      
        {
          pid: 39,
          lpSymbol: 'BTC-USDC LP',
          lpAddresses: {
            80001: '',
            250: '0x22B30B00e6796Daf710fBE5cAFBFc9Cdd1377f2A',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 5,
          jarAddresses: {
            80001: '',
            250: '0x451918789b42814A314Ea2856d94E4ddB4d3430f',
          },



          rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
          poolWeightDesignate: 32 / 832,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          kogefarmComment: ' (Beets)',
          isBeethoven: true
        },
      
        {
          pid: 40,
          lpSymbol: 'BTC-Eth-USDC LP',
          lpAddresses: {
            80001: '',
            250: '0x6FDC8415B654B0F60475944A0b9421Dc36ee1363',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 6,
          jarAddresses: {
            80001: '',
            250: '0xb7F0b6d865B187D6E8d0FF734D4c6d616650C705',
          },



          rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
          poolWeightDesignate: 32 / 832,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          kogefarmComment: ' (Beets)',
          isBeethoven: true
        },
      
        {
          pid: 41,
          lpSymbol: 'USDC-FTM LP',
          lpAddresses: {
            80001: '',
            250: '0xcdF68a4d525Ba2E90Fe959c74330430A5a6b8226',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 8,
          jarAddresses: {
            80001: '',
            250: '0x184E361C92157bd44A28B6C4bC069588Ec0E97E2',
          },



          rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
          poolWeightDesignate: 100 / 832,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          kogefarmComment: ' (Beets)',
          isBeethoven: true
        },
      
        {
          pid: 42,
          lpSymbol: 'MIM-fUSDT-USDC LP',
          lpAddresses: {
            80001: '',
            250: '0xD163415BD34EF06f57C58D2AEd5A5478AfB464cC',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 10,
          jarAddresses: {
            80001: '',
            250: '0xE60Ff9b586E645F80Cd761890F0C548B512A55b2',
          },



          rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
          poolWeightDesignate: 25 / 832,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          kogefarmComment: ' (Beets)',
          isBeethoven: true
        },
      
        {
          pid: 28,
          lpSymbol: 'MIM-fUSDT-USDC LP',
          lpAddresses: {
            80001: '',
            250: '0x2dd7C9371965472E5A5fD28fbE165007c61439E1',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x37Cf490255082ee50845EA4Ff783Eb9b6D1622ce',
          },
          masterChefPid: 0,
          jarAddresses: {
            80001: '',
            250: '0x0a5E266afB071CB0F69310706154F2893a208D1c',
          },



          rewardPerBlock: 182.894918981 * 2 / 1.03, // 0.625
          poolWeightDesignate: 3000 / 3000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://abracadabra.money/farm-stand',
          platform: 'Abracadabra',
          kogefarmComment: ' (Curve)'
        },
      
      
        {
          pid: 27,
          lpSymbol: 'USDC-FTM LP',
          lpAddresses: {
            80001: '',
            250: '0xe7E90f5a767406efF87Fdad7EB07ef407922EC1D',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
          },
          masterChefPid: 4,
          jarAddresses: {
            80001: '',
            250: '0xD1FDFB2BE4fd5e7Ee5b9D6E91538b2cf073B8AA2',
          },



          rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 80 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
          kogefarmComment: ' (Spirit)',
          isSpirit: true,
        },
        {
          pid: 29,
          lpSymbol: 'fUSDT-FTM LP',
          lpAddresses: {
            80001: '',
            250: '0xd14Dd3c56D9bc306322d4cEa0E1C49e9dDf045D4',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
          },
          masterChefPid: 17,
          jarAddresses: {
            80001: '',
            250: '0xc447E9a3fFbCa924Aa8CF9A2301975515DaE9661',
          },



          rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 80 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
          kogefarmComment: ' (Spirit)',
          isSpirit: true,
        },
        {
          pid: 30,
          lpSymbol: 'MIM-FTM LP',
          lpAddresses: {
            80001: '',
            250: '0xB32b31DfAfbD53E310390F641C7119b5B9Ea0488',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
          },
          masterChefPid: 30,
          jarAddresses: {
            80001: '',
            250: '0xfF3349c817B795a0A44c74B823a765B31C226038',
          },



          rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 80 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
          kogefarmComment: ' (Spirit)',
          isSpirit: true,
        },
        {
          pid: 31,
          lpSymbol: 'LINK-FTM LP',
          lpAddresses: {
            80001: '',
            250: '0xd061c6586670792331E14a80f3b3Bb267189C681',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
          },
          masterChefPid: 11,
          jarAddresses: {
            80001: '',
            250: '0x02bc4F42b998FC23355c780A756446d9998d78dE',
          },



          rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 20 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
          kogefarmComment: ' (Spirit)',
          isSpirit: true,
        },
        {
          pid: 32,
          lpSymbol: 'CRV-FTM LP',
          lpAddresses: {
            80001: '',
            250: '0x374C8ACb146407Ef0AE8F82BaAFcF8f4EC1708CF',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
          },
          masterChefPid: 10,
          jarAddresses: {
            80001: '',
            250: '0xB49fecd52B88EFA8248BF2408e4ff08EaFC85b91',
          },



          rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 29 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
          kogefarmComment: ' (Spirit)',
          isSpirit: true,
        },
        {
          pid: 33,
          lpSymbol: 'ICE-FTM LP',
          lpAddresses: {
            80001: '',
            250: '0x936D23C83c2469f6a14B9f5bEaec13879598A5aC',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
          },
          masterChefPid: 7,
          jarAddresses: {
            80001: '',
            250: '0xFc68488ca2DdEBBdcd980AafDde2E3374F5AD222',
          },



          rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 20 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
          kogefarmComment: ' (Spirit)',
          isSpirit: true,
        },
        {
          pid: 34,
          lpSymbol: 'SPELL-fUSDT LP',
          lpAddresses: {
            80001: '',
            250: '0x31c0385DDE956f95D43Dac80Bd74FEE149961f4c',
          },
          masterChefAddresses: {
            80001: '',
            250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
          },
          masterChefPid: 40,
          jarAddresses: {
            80001: '',
            250: '0x5a94Fd3A5D58fbB97F817223aA2Ea6773fE7dA57',
          },



          rewardPerBlock: 17 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 40 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
          kogefarmComment: ' (Spirit)',
          isSpirit: true,
        },
      
      ]
}