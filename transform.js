// Just copy paste the vaults from our frontend vaults.
// Use the regex expression `.*token..*` with the regex matcher activated on VSCode
// to replace undefined vars, we're looking to `token` in our case.
// BE SURE TO REPLACE IT ONLY ON THE `transform.js` FILE.

// Call it with `node transform.js`

const fs = require('fs')

const vaults = getVaults()

// Modify the output filename and the jar addresse chainId as needed
fs.writeFileSync(
  'movr_vault_addresses.json',
  JSON.stringify(
    vaults.map((e) => ({
      vault: e.jarAddresses['1285'],
      __comment: `${e.platform} ${e.lpSymbol}`,
    })),
  ),
)

function getVaults() {
  return [
    {
      pid: 34,
      lpSymbol: 'MOVR-FINN LP',
      lpAddresses: {
        80001: '',
        1285: '0xbBe2f34367972Cb37ae8dea849aE168834440685',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
      },
      masterChefPid: 4,
      jarAddresses: {
        80001: '',
        1285: '0x39109Dd55Ed30fAd5aF63C8C79Bb5A8BB65e94C1',
      },

      rewardPerBlock: (7.6 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 1000 / 4950,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://www.huckleberry.finance/',
      platform: 'Huckleberry',
      createdAt: '2021/10/21',
    },

    {
      pid: 35,
      lpSymbol: 'USDC-FINN LP',
      lpAddresses: {
        80001: '',
        1285: '0xb04492345b0618acFf27AC27CeC4244fBdd30208',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
      },
      masterChefPid: 8,
      jarAddresses: {
        80001: '',
        1285: '0x98ec2A4afEe2578eF95421D6Ff699A247304D1F3',
      },

      rewardPerBlock: (7.6 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 1000 / 4950,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://www.huckleberry.finance/',
      platform: 'Huckleberry',
      createdAt: '2021/10/21',
    },

    {
      pid: 36,
      lpSymbol: 'DOT-FINN LP',
      lpAddresses: {
        80001: '',
        1285: '0xF09211fb5eD5019b072774cfD7Db0c9f4ccd5Be0',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
      },
      masterChefPid: 7,
      jarAddresses: {
        80001: '',
        1285: '0xB1d3857e4435199cD6Bae09F6eCa346355BDbE12',
      },

      rewardPerBlock: (7.6 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 500 / 4950,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://www.huckleberry.finance/',
      platform: 'Huckleberry',
      createdAt: '2021/10/21',
    },

    {
      pid: 37,
      lpSymbol: 'XRP-FINN LP',
      lpAddresses: {
        80001: '',
        1285: '0x7491D6e5aC2785Fc9c873922F9B424fCA7720519',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
      },
      masterChefPid: 6,
      jarAddresses: {
        80001: '',
        1285: '0x33D33ac00877012943f850026E0aa2D6a0A3a629',
      },

      rewardPerBlock: (7.6 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 300 / 4950,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://www.huckleberry.finance/',
      platform: 'Huckleberry',
      createdAt: '2021/10/21',
    },
    {
      pid: 21,
      lpSymbol: 'Solar-Movr LP',
      lpAddresses: {
        80001: '',
        1285: '0x7eDA899b3522683636746a2f3a7814e6fFca75e1',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 0,
      jarAddresses: {
        80001: '',
        1285: '0x0a5E266afB071CB0F69310706154F2893a208D1c',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 6000 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },

    {
      pid: 23,
      lpSymbol: 'Solar-USDC LP',
      lpAddresses: {
        80001: '',
        1285: '0xdb66BE1005f5Fe1d2f486E75cE3C50B52535F886',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 7,
      jarAddresses: {
        80001: '',
        1285: '0x4c42f8224E16b40d79BeB775bf1df1a63967FC7c',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 2300 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },

    {
      pid: 22,
      lpSymbol: 'Movr-USDC LP',
      lpAddresses: {
        80001: '',
        1285: '0xe537f70a8b62204832B8Ba91940B77d3f79AEb81',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 6,
      jarAddresses: {
        80001: '',
        1285: '0xaE3BDcf55FE53408EC4ad07480368e04c795575d',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 600 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },

    {
      pid: 20,
      lpSymbol: 'USDC-Dai LP',
      lpAddresses: {
        80001: '',
        1285: '0xFE1b71BDAEE495dCA331D28F5779E87bd32FbE53',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 8,
      jarAddresses: {
        80001: '',
        1285: '0x005d1d02e396D4B47DD92e3c068a6Cec153238cd',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 270 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },

    {
      pid: 24,
      lpSymbol: 'BUSD-USDC LP',
      lpAddresses: {
        80001: '',
        1285: '0x384704557F73fBFAE6e9297FD1E6075FC340dbe5',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 8,
      jarAddresses: {
        80001: '',
        1285: '0xFA45b55c3a2bA74B9De476FC01658F9352209390',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 270 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },

    {
      pid: 25,
      lpSymbol: 'USDC-USDT LP',
      lpAddresses: {
        80001: '',
        1285: '0x2a44696DDc050f14429bd8a4A05c750C6582bF3b',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 13,
      jarAddresses: {
        80001: '',
        1285: '0x31645AEFBCF37127f511b7BD9A7bfdA7427AeF8e',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 270 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },

    {
      pid: 26,
      lpSymbol: 'Mai-USDC LP',
      lpAddresses: {
        80001: '',
        1285: '0x55Ee073B38BF1069D5F1Ed0AA6858062bA42F5A9',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 17,
      jarAddresses: {
        80001: '',
        1285: '0xA1d30Bee6896e07B8713E73b56A6c35a559DEa50',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 270 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },

    {
      pid: 33,
      lpSymbol: 'MIM-USDC LP',
      lpAddresses: {
        80001: '',
        1285: '0x9051fB701d6D880800e397e5B5d46FdDfAdc7056',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 19,
      jarAddresses: {
        80001: '',
        1285: '0xAc6DebA557fbeb17de8E0F88bFE92eAB54724018',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 270 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },

    {
      pid: 27,
      lpSymbol: 'USDC-ETH LP',
      lpAddresses: {
        80001: '',
        1285: '0xA0D8DFB2CC9dFe6905eDd5B71c56BA92AD09A3dC',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 10,
      jarAddresses: {
        80001: '',
        1285: '0xB31E2E391251705b53983221AAB3fdB0c728C51f',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 270 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },

    {
      pid: 28,
      lpSymbol: 'BNB-BUSD LP',
      lpAddresses: {
        80001: '',
        1285: '0xfb1d0D6141Fc3305C63f189E39Cc2f2F7E58f4c2',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 11,
      jarAddresses: {
        80001: '',
        1285: '0x6948E97d777Ea8EfD756dFa5E679C0D9be3A4E14',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 270 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },

    {
      pid: 29,
      lpSymbol: 'BTC-USDC LP',
      lpAddresses: {
        80001: '',
        1285: '0x83d7a3fc841038E8c8F46e6192BBcCA8b19Ee4e7',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 12,
      jarAddresses: {
        80001: '',
        1285: '0x02C4B3a6FF8b187fb381CD3461229e2c77E0B5f9',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 270 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },

    {
      pid: 30,
      lpSymbol: 'Matic-MOVR LP',
      lpAddresses: {
        80001: '',
        1285: '0x29633cc367AbD9b16d327Adaf6c3538b6e97f6C0',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 14,
      jarAddresses: {
        80001: '',
        1285: '0xA5c44621FDDd448032d22987845c24Edf5c2953D',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 135 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },

    {
      pid: 31,
      lpSymbol: 'AVAX-MOVR LP',
      lpAddresses: {
        80001: '',
        1285: '0xb9a61ac826196AbC69A3C66ad77c563D6C5bdD7b',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 15,
      jarAddresses: {
        80001: '',
        1285: '0xa5133eE054a02fDEB7A03909B4bfd73b3C7e16A2',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 135 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },

    {
      pid: 32,
      lpSymbol: 'FTM-MOVR LP',
      lpAddresses: {
        80001: '',
        1285: '0x1eebed8F28A6865a76D91189FD6FC45F4F774d67',
      },
      masterChefAddresses: {
        80001: '',
        1285: '0xf03b75831397D4695a6b9dDdEEA0E578faa30907',
      },
      masterChefPid: 18,
      jarAddresses: {
        80001: '',
        1285: '0xa70c8268152D2B06E2313de2273F82D9B031b35a',
      },

      rewardPerBlock: (3.95 * 2) / 12, // Fix reward block time
      poolWeightDesignate: 135 / 12120,
      minutesPerCompound: 60,
      kogefarmFee: 0.01,
      underlyingWebsite: 'https://solarbeam.io/',
      platform: 'SolarBeam',
    },
  ]
}
