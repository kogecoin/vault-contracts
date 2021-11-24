// Just copy paste the vaults from our frontend vaults.

// BE SURE TO REPLACE IT ONLY ON THE `transform.js` FILE.

// Call it with `node transform.js`

const fs = require('fs')

const vaults = getVaults()

// Modify the output filename and the jar addresse chainId as needed
fs.writeFileSync(
  'ftm_vault_addresses.json',
  JSON.stringify(
    vaults.map((e) => ({
      vault: e.jarAddresses['250'],
      __comment: `${e.platform} ${e.lpSymbol}`,
    })),
  ),
)

function getVaults() {
  return [
    {
        pid: 75,
        lpSymbol: 'Dai-USDC-USDT LP',
        lpAddresses: {
            80001: '',
            250: '0xD02a30d33153877BC20e5721ee53DeDEE0422B2F',
        },
        masterChefAddresses: {
            80001: '',
            250: '0xd4F94D0aaa640BBb72b5EEc2D85F6D114D81a88E',
        },
        masterChefPid: 0,
        jarAddresses: {
            80001: '',
            250: '0x68B9F58dfB5a7EFfD6ec9a6789E03BB9562aF4aD',
        },





        rewardPerBlockA: 0.61, // 0.61
        rewardPerBlockB: 0.6380, // 0.6380
        rewardPerBlockC: 0.1875, // 0.1875
        poolWeightDesignate: 1,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://ftm.curve.fi/',
        platform: 'Curve',
        isCurveFtm: true,
        kogefarmComment: 'Curve Geist',
        createdAt: "2021/11/13"
    },

    {
        pid: 73,
        lpSymbol: 'USDC-Dai LP',
        lpAddresses: {
            80001: '',
            250: '0x27E611FD27b276ACbd5Ffd632E5eAEBEC9761E40',
        },
        masterChefAddresses: {
            80001: '',
            250: '0x8866414733F22295b7563f9C5299715D2D76CAf4',
        },
        masterChefPid: 0,
        jarAddresses: {
            80001: '',
            250: '0x4Ef103DF324b20604e13170377233DDecD15074B',
        },




        rewardPerBlock1: 0.179, // 0.179
        rewardPerBlock2: 0.024,
        poolWeightDesignate: 1,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://ftm.curve.fi/',
        platform: 'Curve',
        isCurveFtm: true,
        createdAt: "2021/11/07"
    },

    {
        pid: 77,
        lpSymbol: 'Btc-renBTC LP',
        lpAddresses: {
            80001: '',
            250: '0x5B5CFE992AdAC0C9D48E05854B2d91C73a003858',
        },
        masterChefAddresses: {
            80001: '',
            250: '0xBdFF0C27dd073C119ebcb1299a68A6A92aE607F0',
        },
        masterChefPid: 0,
        jarAddresses: {
            80001: '',
            250: '0xEb4419dBbAFa8885d30994E47e922afbE7eecB4B',
        },




        rewardPerBlock1: 0.148, // 0.148
        rewardPerBlock2: 0.006,
        poolWeightDesignate: 1,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://ftm.curve.fi/',
        platform: 'Curve',
        isCurveFtm: true,
        createdAt: "2021/11/17"
    },

    {
        pid: 78,
        lpSymbol: 'Tricrypto LP',
        lpAddresses: {
            80001: '',
            250: '0x58e57cA18B7A47112b877E31929798Cd3D703b0f',
        },
        masterChefAddresses: {
            80001: '',
            250: '0x00702BbDEaD24C40647f235F15971dB0867F6bdB',
        },
        masterChefPid: 0,
        jarAddresses: {
            80001: '',
            250: '0x24700792EBCB57859833b8C27A114e569DBC3786',
        },




        rewardPerBlock1: 0.1386, // 0.1386
        rewardPerBlock2: 0.0223,
        poolWeightDesignate: 1,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://ftm.curve.fi/',
        platform: 'Curve',
        isCurveFtm: true,
        createdAt: "2021/11/17"
    },


      {
          pid: 51,
          lpSymbol: 'TSHARE-FTM LP',
          lpAddresses: {
              80001: '',
              250: '0x4733bc45eF91cF7CcEcaeeDb794727075fB209F2',
          },
          masterChefAddresses: {
              80001: '',
              250: '0xcc0a87F7e7c693042a9Cc703661F5060c80ACb43',
          },
          masterChefPid: 1,
          jarAddresses: {
              80001: '',
              250: '0x632918CE1c5D93E7CB7622e07e3934c24054a8dd',
          },



          rewardPerBlock: 0.00186122 * 1.03 * 2 / 1.03,
          poolWeightDesignate: 24000 / 59500,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://tomb.finance/',
          platform: 'TombFinance',
          isSpooky: true,
          createdAt: "2021/10/22"
      },
      {
          pid: 52,
          lpSymbol: 'TOMB-FTM LP',
          lpAddresses: {
              80001: '',
              250: '0x2A651563C9d3Af67aE0388a5c8F89b867038089e',
          },
          masterChefAddresses: {
              80001: '',
              250: '0xcc0a87F7e7c693042a9Cc703661F5060c80ACb43',
          },
          masterChefPid: 0,
          jarAddresses: {
              80001: '',
              250: '0x234765DDD45c287d0565AAb4277f7ceE6Ed3BC4f',
          },



          rewardPerBlock: 0.00186122 * 1.03 * 2 / 1.03,
          poolWeightDesignate: 35500 / 59500,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://tomb.finance/',
          platform: 'TombFinance',
          isSpooky: true,
          createdAt: "2021/10/22"
      },
      {
          pid: 50,
          lpSymbol: 'Geist-FTM LP',
          lpAddresses: {
              80001: '',
              250: '0x668AE94D0870230AC007a01B471D02b2c94DDcB9',
          },
          masterChefAddresses: {
              80001: '',
              250: '0xE40b7FA6F5F7FB0Dc7d56f433814227AAaE020B5',
          },
          masterChefPid: 0,
          jarAddresses: {
              80001: '',
              250: '0x80C8513190D237455FEe3bFC4eeaaE6c15627606',
          },


          rewardPerBlock: 6.43004108796 * 1.03 * 0.5 * 2 / 1.03, // 0.625
          poolWeightDesignate: 1,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://geist.finance/staking',
          platform: 'Geist',
          isSpooky: true,
          createdAt: "2021/10/20"
      },

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



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 150 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/10/20",
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



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 256 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
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



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 80 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/10/20",
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



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 8 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/10/20",
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



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 28 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/10/20",
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



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 28 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/10/20",
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



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 15 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/10/20",
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



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 98 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/10/20",
      },

      {
          pid: 79,
          lpSymbol: 'FTM-Dai LP',
          lpAddresses: {
              80001: '',
              250: '0x63386eF152E1Ddef96c065636D6cC0165Ff33291',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 23,
          jarAddresses: {
              80001: '',
              250: '0x54d863a6dA9489d809581947C1305384e4D9F420',
          },



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 20 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.029,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/11/24",
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



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 17 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true
      },


      {
          pid: 46,
          lpSymbol: 'DanceOfDegens LP',
          lpAddresses: {
              80001: '',
              250: '0x72C0eB973Dc95e2d185563f58fC26626CC2e8034',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 7,
          jarAddresses: {
              80001: '',
              250: '0x7D9F24523C73C46fB333777cF9688AF1AeA0Eb03',
          },



          rewardPerBlock: 5.05 * 2 / 1.03, // 0.625
          poolWeightDesignate: 0 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          multiplier: '0X'
      },

      {
          pid: 45,
          lpSymbol: 'TheMagicTouch LP',
          lpAddresses: {
              80001: '',
              250: '0x6d12D3fE16dD83115254a32B273B05Ac5444C349',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 12,
          jarAddresses: {
              80001: '',
              250: '0x5751834D7e49863De62F545eb3283850D3ecf8Ec',
          },



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 10 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/10/20",
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
          poolWeightDesignate: 0 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/10/20",
          multiplier: '0X'
      },

      {
          pid: 47,
          lpSymbol: 'Mai-Dai-USDC LP',
          lpAddresses: {
              80001: '',
              250: '0x2C580C6F08044D6dfACA8976a66C8fAddDBD9901',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 16,
          jarAddresses: {
              80001: '',
              250: '0x9d0476F35f73d1D5bDB45CF64CFF2c32ec3Fa3a0',
          },



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 13 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/10/20",
      },

      {
          pid: 48,
          lpSymbol: 'FantomConservatory LP',
          lpAddresses: {
              80001: '',
              250: '0xfC092F85125907fFcb0f9012e6e40B3f37c4De60',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 15,
          jarAddresses: {
              80001: '',
              250: '0x12FEFE92fd9c6d3F9DcF8bE4978F84ac90048A9F',
          },



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 32 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/10/20",
      },

      {
          pid: 60,
          lpSymbol: 'LateQuartet LP',
          lpAddresses: {
              80001: '',
              250: '0xf3A602d30dcB723A74a0198313a7551FEacA7DAc',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 17,
          jarAddresses: {
              80001: '',
              250: '0xe35369AEb6A09675DFb3c30A98ebFfA71EF439a4',
          },



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 22 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/11/1",
      },

      {
          pid: 70,
          lpSymbol: 'IceAndFire LP',
          lpAddresses: {
              80001: '',
              250: '0x2BeA17EdE5D83ad19ae112B8592AadaA2B015De7',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 18,
          jarAddresses: {
              80001: '',
              250: '0x55eE8a91b91B2a73075106FF5d6e9A2eBC6c2a58',
          },



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 8 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/11/4",
      },

      {
          pid: 74,
          lpSymbol: 'BaronVonBnb LP',
          lpAddresses: {
              80001: '',
              250: '0x5E65474c8400d0BB76eDBBE066B2D2E7b0b6e7fb',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 21,
          jarAddresses: {
              80001: '',
              250: '0x4C59Fe438B54950Bd95d27A0677cb1c774650D55',
          },



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 8 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/11/4",
      },

      {
          pid: 71,
          lpSymbol: 'TubularBells LP',
          lpAddresses: {
              80001: '',
              250: '0x65Bf2d53BD1d7050d22873f6B9Bb59edb0cA0b20',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 19,
          jarAddresses: {
              80001: '',
              250: '0x211935dadeE885Eb6b686a7e27538Cc7DaFdC305',
          },



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 8 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/11/4",
      },

      {
          pid: 72,
          lpSymbol: 'USDC-Dai LP',
          lpAddresses: {
              80001: '',
              250: '0xd41bF724b6e31311Db582c5388Af6B316e812Fe4',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x8166994d9ebBe5829EC86Bd81258149B87faCfd3',
          },
          masterChefPid: 2,
          jarAddresses: {
              80001: '',
              250: '0x6dF8d03066E321508f59A6eA6373C17e91371fA4',
          },



          rewardPerBlock: 5.02 * 2 / 1.03, // 0.625
          poolWeightDesignate: 22 / 830,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.beethovenx.io/#/farm',
          platform: 'Beethoven-X',
          isBeethoven: true,
          createdAt: "2021/11/7",
      },


      {
          pid: 53,
          lpSymbol: 'FTM-BOO LP',
          lpAddresses: {
              80001: '',
              250: '0xEc7178F4C41f346b2721907F5cF7628E388A7a58',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x2b2929E785374c651a81A63878Ab22742656DcDd',
          },
          masterChefPid: 0,
          jarAddresses: {
              80001: '',
              250: '0xfA31a189709262E70AC42CD71d3795a58473e321',
          },



          rewardPerBlock: 0.159 * 1.03 * 2 / 1.03,
          poolWeightDesignate: 3000 / 7450,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://spookyswap.finance/',
          platform: 'SpookySwap',
          isSpooky: true,
          createdAt: "2021/10/27"
      },
      {
          pid: 54,
          lpSymbol: 'USDC-FTM LP',
          lpAddresses: {
              80001: '',
              250: '0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x2b2929E785374c651a81A63878Ab22742656DcDd',
          },
          masterChefPid: 2,
          jarAddresses: {
              80001: '',
              250: '0x6642617882Db7218770E9b13F57eE4c6207F175b',
          },



          rewardPerBlock: 0.159 * 1.03 * 2 / 1.03,
          poolWeightDesignate: 900 / 7450,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://spookyswap.finance/',
          platform: 'SpookySwap',
          isSpooky: true,
          createdAt: "2021/10/27"
      },
      {
          pid: 55,
          lpSymbol: 'FTM-WETH LP',
          lpAddresses: {
              80001: '',
              250: '0xf0702249F4D3A25cD3DED7859a165693685Ab577',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x2b2929E785374c651a81A63878Ab22742656DcDd',
          },
          masterChefPid: 5,
          jarAddresses: {
              80001: '',
              250: '0x1F6c36C8a3a68D8a2B5C5Dee7f69dbB918995F30',
          },



          rewardPerBlock: 0.159 * 1.03 * 2 / 1.03,
          poolWeightDesignate: 440 / 7450,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://spookyswap.finance/',
          platform: 'SpookySwap',
          isSpooky: true,
          createdAt: "2021/10/27"
      },
      {
          pid: 56,
          lpSymbol: 'BTC-ETH LP',
          lpAddresses: {
              80001: '',
              250: '0xEc454EdA10accdD66209C57aF8C12924556F3aBD',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x2b2929E785374c651a81A63878Ab22742656DcDd',
          },
          masterChefPid: 35,
          jarAddresses: {
              80001: '',
              250: '0x0E441af528EE6e503FD8F48F46F9F24121b7A139',
          },



          rewardPerBlock: 0.159 * 1.03 * 2 / 1.03,
          poolWeightDesignate: 150 / 7450,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://spookyswap.finance/',
          platform: 'SpookySwap',
          isSpooky: true,
          createdAt: "2021/10/27"
      },
      {
          pid: 57,
          lpSymbol: 'FTM-BTC LP',
          lpAddresses: {
              80001: '',
              250: '0xFdb9Ab8B9513Ad9E419Cf19530feE49d412C3Ee3',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x2b2929E785374c651a81A63878Ab22742656DcDd',
          },
          masterChefPid: 4,
          jarAddresses: {
              80001: '',
              250: '0x59413fFE8b41FE3b1f01ef7Da9D1D0929fB0F49c',
          },



          rewardPerBlock: 0.159 * 1.03 * 2 / 1.03,
          poolWeightDesignate: 350 / 7450,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://spookyswap.finance/',
          platform: 'SpookySwap',
          isSpooky: true,
          createdAt: "2021/10/27"
      },
      {
          pid: 58,
          lpSymbol: 'FTM-DAI LP',
          lpAddresses: {
              80001: '',
              250: '0xe120ffBDA0d14f3Bb6d6053E90E63c572A66a428',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x2b2929E785374c651a81A63878Ab22742656DcDd',
          },
          masterChefPid: 3,
          jarAddresses: {
              80001: '',
              250: '0x75EA68202F413dc357180Ff72FE547Bf9442bFB5',
          },



          rewardPerBlock: 0.159 * 1.03 * 2 / 1.03,
          poolWeightDesignate: 300 / 7450,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://spookyswap.finance/',
          platform: 'SpookySwap',
          isSpooky: true,
          createdAt: "2021/10/27"
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



          rewardPerBlock: 96.0198330026 * 2 * 1.03 / 1.03, // 0.625
          poolWeightDesignate: 3000 / 3000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://abracadabra.money/farm-stand',
          platform: 'Abracadabra',
      },

      {
          pid: 61,
          lpSymbol: 'fWINGS-FTM LP',
          lpAddresses: {
              80001: '',
              250: '0x1047f356D7cB29D5939724c69E4eE61e820aFAC6',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x9180583C1ab03587b545629dd60D2be0bf1DF4f2',
          },
          masterChefPid: 1,
          jarAddresses: {
              80001: '',
              250: '0x51DACd87f0CCb9B36B41EdAA2A0f0AbaeB360863',
          },



          rewardPerBlock: 0.5 * 2 / 1.03,
          poolWeightDesignate: 3000 / 10000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://fantom-exchange.jetswap.finance/',
          platform: 'JetSwap',
          isJetSwapFtm: true,
          createdAt: "2021/11/03"
      },
      {
          pid: 62,
          lpSymbol: 'fWINGS-USDC LP',
          lpAddresses: {
              80001: '',
              250: '0x89fF795017AE21A8696d371F685Cd02FC219F56F',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x9180583C1ab03587b545629dd60D2be0bf1DF4f2',
          },
          masterChefPid: 2,
          jarAddresses: {
              80001: '',
              250: '0x2bCaE64b1D73C9C38CDb2714BeEe96dB3e7e8195',
          },



          rewardPerBlock: 0.5 * 2 / 1.03,
          poolWeightDesignate: 2000 / 10000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://fantom-exchange.jetswap.finance/',
          platform: 'JetSwap',
          isJetSwapFtm: true,
          createdAt: "2021/11/03"
      },
      {
          pid: 63,
          lpSymbol: 'USDC-FTM LP',
          lpAddresses: {
              80001: '',
              250: '0x43CB347acf464a36F3D2D01c7Bf72fC6Be4b4E78',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x9180583C1ab03587b545629dd60D2be0bf1DF4f2',
          },
          masterChefPid: 3,
          jarAddresses: {
              80001: '',
              250: '0x355434F8aF4B918738450BBD919C993B9128aEac',
          },



          rewardPerBlock: 0.5 * 2 / 1.03,
          poolWeightDesignate: 400 / 10000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://fantom-exchange.jetswap.finance/',
          platform: 'JetSwap',
          isJetSwapFtm: true,
          createdAt: "2021/11/03"
      },
      {
          pid: 64,
          lpSymbol: 'ETH-FTM LP',
          lpAddresses: {
              80001: '',
              250: '0x22133986DF9642CB47ff638a14975359aB3770C1',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x9180583C1ab03587b545629dd60D2be0bf1DF4f2',
          },
          masterChefPid: 5,
          jarAddresses: {
              80001: '',
              250: '0x14DA37c0E647D85Ee0d255481CE6aB3dD54a87bc',
          },



          rewardPerBlock: 0.5 * 2 / 1.03,
          poolWeightDesignate: 200 / 10000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://fantom-exchange.jetswap.finance/',
          platform: 'JetSwap',
          isJetSwapFtm: true,
          createdAt: "2021/11/03"
      },
      {
          pid: 65,
          lpSymbol: 'BTC-FTM LP',
          lpAddresses: {
              80001: '',
              250: '0xce92eBD8B17B4B713013ae88A88B61fb3f861B4e',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x9180583C1ab03587b545629dd60D2be0bf1DF4f2',
          },
          masterChefPid: 6,
          jarAddresses: {
              80001: '',
              250: '0x13c7210E630Bc3329F0476F762A9727105D671DF',
          },



          rewardPerBlock: 0.5 * 2 / 1.03,
          poolWeightDesignate: 200 / 10000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://fantom-exchange.jetswap.finance/',
          platform: 'JetSwap',
          isJetSwapFtm: true,
          createdAt: "2021/11/03"
      },
      {
          pid: 66,
          lpSymbol: 'BTC-ETH LP',
          lpAddresses: {
              80001: '',
              250: '0x04C25d06eD3984AAE14CA705d3CaF97Fb7238799',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x9180583C1ab03587b545629dd60D2be0bf1DF4f2',
          },
          masterChefPid: 7,
          jarAddresses: {
              80001: '',
              250: '0x75836AD63aE0AAd9AF857400e9e8ea370A945d85',
          },



          rewardPerBlock: 0.5 * 2 / 1.03,
          poolWeightDesignate: 200 / 10000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://fantom-exchange.jetswap.finance/',
          platform: 'JetSwap',
          isJetSwapFtm: true,
          createdAt: "2021/11/03"
      },
      {
          pid: 67,
          lpSymbol: 'ETH-USDC LP',
          lpAddresses: {
              80001: '',
              250: '0xD21A2c9032D09B7174dB93736b834D2a7eaDab15',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x9180583C1ab03587b545629dd60D2be0bf1DF4f2',
          },
          masterChefPid: 8,
          jarAddresses: {
              80001: '',
              250: '0xa4648B8d95377904E16269cB694466E0F4237154',
          },



          rewardPerBlock: 0.5 * 2 / 1.03,
          poolWeightDesignate: 200 / 10000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://fantom-exchange.jetswap.finance/',
          platform: 'JetSwap',
          isJetSwapFtm: true,
          createdAt: "2021/11/03"
      },
      {
          pid: 68,
          lpSymbol: 'BTC-USDC LP',
          lpAddresses: {
              80001: '',
              250: '0x6B5340dFcd7D509Ea931cC4E69462797DbBc0197',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x9180583C1ab03587b545629dd60D2be0bf1DF4f2',
          },
          masterChefPid: 10,
          jarAddresses: {
              80001: '',
              250: '0x2a6CBFC07d9b66c10733c3Cba3188B44af683CFF',
          },



          rewardPerBlock: 0.5 * 2 / 1.03,
          poolWeightDesignate: 150 / 10000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://fantom-exchange.jetswap.finance/',
          platform: 'JetSwap',
          isJetSwapFtm: true,
          createdAt: "2021/11/03"
      },
      {
          pid: 69,
          lpSymbol: 'fUSDT-USDC LP',
          lpAddresses: {
              80001: '',
              250: '0xB8D08e75440b89c2c25a400Ab1883B689C0A1A64',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x9180583C1ab03587b545629dd60D2be0bf1DF4f2',
          },
          masterChefPid: 12,
          jarAddresses: {
              80001: '',
              250: '0x91DC6E84867B58F0945CeD3138c862a3A15A84a7',
          },



          rewardPerBlock: 0.5 * 2 / 1.03,
          poolWeightDesignate: 250 / 10000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://fantom-exchange.jetswap.finance/',
          platform: 'JetSwap',
          isJetSwapFtm: true,
          createdAt: "2021/11/03"
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



          rewardPerBlock: 13.14 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 80 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
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



          rewardPerBlock: 13.14 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 80 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
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



          rewardPerBlock: 13.14 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 80 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
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



          rewardPerBlock: 13.14 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 20 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
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



          rewardPerBlock: 13.14 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 20 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
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



          rewardPerBlock: 13.14 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 20 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
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



          rewardPerBlock: 13.14 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 40 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
          isSpirit: true,
      },
      {
          pid: 59,
          lpSymbol: 'MIM-wMEMO LP',
          lpAddresses: {
              80001: '',
              250: '0xC9B98e4A4e306DFc24bc5b5F66e271e19Fd74c5A',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
          },
          masterChefPid: 57,
          jarAddresses: {
              80001: '',
              250: '0x7641b2dF3d37fE5007EE09d7e21294c0E2c4c342',
          },



          rewardPerBlock: 13.14 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 18 / 1000,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
          isSpirit: true,
          createdAt: "2021/10/28"
      },

      {
          pid: 76,
          lpSymbol: 'Spell-sSpell LP',
          lpAddresses: {
              80001: '',
              250: '0x4f41D03631Ea4dC14016CcF90690d6D22b24C12D',
          },
          masterChefAddresses: {
              80001: '',
              250: '0x9083EA3756BDE6Ee6f27a6e996806FBD37F6F093',
          },
          masterChefPid: 60,
          jarAddresses: {
              80001: '',
              250: '0x9D26e1fb94Dc683F578678cfAC877Cd4ac9124E7',
          },



          rewardPerBlock: 13.14 * 2 / 1.03, // Fix reward block time
          poolWeightDesignate: 15 / 1005,
          minutesPerCompound: 60,
          kogefarmFee: 0.01,
          underlyingWebsite: 'https://app.spiritswap.finance/',
          platform: 'SpiritSwap',
          isSpirit: true,
          createdAt: "2021/11/17"
      },
  ]
}
