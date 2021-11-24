// Just copy paste the vaults from our frontend vaults.

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
        pid: 45,
        lpSymbol: 'BTC-ETH LP',
        lpAddresses: {
            80001: '',
            1285: '0x85657487978d65BB7881e9dAD3aA119E6E6705cE',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x3dB01570D97631f69bbb0ba39796865456Cf89A5',
        },
        masterChefPid: 0,
        jarAddresses: {
            80001: '',
            1285: '0x50E618B129454373FF6F560c90cA334c3C17bc7f',
        },




        rewardPerBlock1: 0.024 * 2, // Fix reward block time
        rewardPerBlock2: 0.00247 * 2, // Fix reward block time
        poolWeightDesignate: 1750 / 10000,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://app.sushi.com/farm',
        platform: 'Sushiswap',
        createdAt: "2021/11/16"
    },
    {
        pid: 46,
        lpSymbol: 'ETH-BNB LP',
        lpAddresses: {
            80001: '',
            1285: '0x69B4FbD8c8Cf74720A62A5e92e2528c3f895cE10',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x3dB01570D97631f69bbb0ba39796865456Cf89A5',
        },
        masterChefPid: 1,
        jarAddresses: {
            80001: '',
            1285: '0x1f7Fa5f767c62704cFdAa4277b378Dbc77DE7DB6',
        },




        rewardPerBlock1: 0.024 * 2, // Fix reward block time
        rewardPerBlock2: 0.00247 * 2, // Fix reward block time
        poolWeightDesignate: 1000 / 10000,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://app.sushi.com/farm',
        platform: 'Sushiswap',
        createdAt: "2021/11/16"
    },
    {
        pid: 47,
        lpSymbol: 'USDT-ETH LP',
        lpAddresses: {
            80001: '',
            1285: '0xB0A594e76A876DE40a7fda9819E5c4Ec6d9Fd222',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x3dB01570D97631f69bbb0ba39796865456Cf89A5',
        },
        masterChefPid: 2,
        jarAddresses: {
            80001: '',
            1285: '0x38Da7A3a1EAE070Ade6768DCcAD7a9A9a7FFaf73',
        },




        rewardPerBlock1: 0.024 * 2, // Fix reward block time
        rewardPerBlock2: 0.00247 * 2, // Fix reward block time
        poolWeightDesignate: 2000 / 10000,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://app.sushi.com/farm',
        platform: 'Sushiswap',
        createdAt: "2021/11/16"
    },
    {
        pid: 48,
        lpSymbol: 'USDC-USDT LP',
        lpAddresses: {
            80001: '',
            1285: '0x930B0464411DE2296E3FD3eeE30ab989F635645E',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x3dB01570D97631f69bbb0ba39796865456Cf89A5',
        },
        masterChefPid: 3,
        jarAddresses: {
            80001: '',
            1285: '0x62cbB73a0AaA2009f325dc5ca940cB50bC28FFB8',
        },




        rewardPerBlock1: 0.024 * 2, // Fix reward block time
        rewardPerBlock2: 0.00247 * 2, // Fix reward block time
        poolWeightDesignate: 750 / 10000,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://app.sushi.com/farm',
        platform: 'Sushiswap',
        createdAt: "2021/11/16"
    },
    {
        pid: 49,
        lpSymbol: 'ETH-MOVR LP',
        lpAddresses: {
            80001: '',
            1285: '0xD4Ce5671b842573EDA99164971AFaA034245f4D8',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x3dB01570D97631f69bbb0ba39796865456Cf89A5',
        },
        masterChefPid: 4,
        jarAddresses: {
            80001: '',
            1285: '0x80546BF73ed61B92aC2eE29f4aC9c016d74cC6D8',
        },




        rewardPerBlock1: 0.024 * 2, // Fix reward block time
        rewardPerBlock2: 0.00247 * 2, // Fix reward block time
        poolWeightDesignate: 3500 / 10000,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://app.sushi.com/farm',
        platform: 'Sushiswap',
        createdAt: "2021/11/16"

    },
    {
        pid: 50,
        lpSymbol: 'FRAX-USDC LP',
        lpAddresses: {
            80001: '',
            1285: '0x310C4d18640aF4878567c4A31cB9cBde7Cd234A3',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x3dB01570D97631f69bbb0ba39796865456Cf89A5',
        },
        masterChefPid: 5,
        jarAddresses: {
            80001: '',
            1285: '0x7a7A3A42F0197D99469AFdC4209C2260ac006fB6',
        },




        rewardPerBlock1: 0.024 * 2, // Fix reward block time
        rewardPerBlock2: 0.00247 * 2, // Fix reward block time
        poolWeightDesignate: 500 / 10000,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://app.sushi.com/farm',
        platform: 'Sushiswap',
        createdAt: "2021/11/16"
    },
    {
        pid: 51,
        lpSymbol: 'MIM-MOVR LP',
        lpAddresses: {
            80001: '',
            1285: '0x6dC6D33331e9d5DeEf449C8CAb9e34D687BEA80E',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x3dB01570D97631f69bbb0ba39796865456Cf89A5',
        },
        masterChefPid: 6,
        jarAddresses: {
            80001: '',
            1285: '0x3423892e9C717aeeC56aA4CeeBA213A35c10f3A2',
        },




        rewardPerBlock1: 0.024 * 2, // Fix reward block time
        rewardPerBlock2: 0.00247 * 2, // Fix reward block time
        poolWeightDesignate: 500 / 10000,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://app.sushi.com/farm',
        platform: 'Sushiswap',
        createdAt: "2021/11/16"
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



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 4876 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
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



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 1828 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
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



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 1828 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
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



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 203 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
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
        masterChefPid: 9,
        jarAddresses: {
            80001: '',
            1285: '0xFA45b55c3a2bA74B9De476FC01658F9352209390',
        },



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 305 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
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



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 203 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
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



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 25 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
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



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 25 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
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



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 102 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
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



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 102 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
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



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 102 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
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



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 102 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
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



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 203 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
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



        rewardPerBlock: 3.1595159 * 2 / 14, // Fix reward block time
        poolWeightDesignate: 102 / 10464,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://solarbeam.io/',
        platform: 'SolarBeam'
    },
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



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 2500 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/10/21"
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



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 1000 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/10/21"
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



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 500 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/10/21"
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



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 300 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/10/21"
    },

    {
        pid: 38,
        lpSymbol: 'AVAX-FINN LP',
        lpAddresses: {
            80001: '',
            1285: '0x10300C5FD4Af0F81fC8DA3f48e44dbccd189f253',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
        },
        masterChefPid: 9,
        jarAddresses: {
            80001: '',
            1285: '0xfC4246D4B4973d3BF7C3A1e4C16df76fe3fD1dA0',
        },



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 300 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/10/29"
    },
    {
        pid: 52,
        lpSymbol: 'RKitty-FINN LP',
        lpAddresses: {
            80001: '',
            1285: '0xDCd92eb568157D3c1a6b3AE53ADF18a230bc304A',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
        },
        masterChefPid: 19,
        jarAddresses: {
            80001: '',
            1285: '0xAAF6A5213AD7180559d626DE29d68decdDeb94FD',
        },



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 300 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/11/21"
    },
    {
        pid: 53,
        lpSymbol: 'FTM-FINN LP',
        lpAddresses: {
            80001: '',
            1285: '0x135C0c09517AF7445a4B27976d3549B996483f4e',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
        },
        masterChefPid: 18,
        jarAddresses: {
            80001: '',
            1285: '0x790831a45Ef57B6260e6EdAb2AC81811b8f2Ec7d',
        },



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 300 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/11/21"
    },
    {
        pid: 54,
        lpSymbol: 'USDT-FINN LP',
        lpAddresses: {
            80001: '',
            1285: '0xBE1C572E40150EaCf046ceFB4A4552FbB13E68f8',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
        },
        masterChefPid: 10,
        jarAddresses: {
            80001: '',
            1285: '0x0f0A5d5E4057393dC56d71D383D07f71c1961bF5',
        },



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 1000 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/11/21"
    },
    {
        pid: 56,
        lpSymbol: 'TOM',
        lpAddresses: {
            80001: '',
            1285: '0x37619cC85325aFea778830e184CB60a3ABc9210B',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
        },
        masterChefPid: 20,
        jarAddresses: {
            80001: '',
            1285: '0xFd5579b0Bfed054F9670c78eFeb6ccEb162A7f40',
        },



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 1000 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/11/21"
    },
    {
        pid: 55,
        lpSymbol: 'WAN-MOVR LP',
        lpAddresses: {
            80001: '',
            1285: '0x0Df4cD5fD2f69E54A3E6d13e5cad54f1eB995E8c',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
        },
        masterChefPid: 1,
        jarAddresses: {
            80001: '',
            1285: '0x649680dbcB6486BdDf643C5Ce489F5E568d0C017',
        },



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 500 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/11/21"
    },
    {
        pid: 39,
        lpSymbol: 'USDC.m-USDT.m LP',
        lpAddresses: {
            80001: '',
            1285: '0xce634Ae7191aB885Fb4ce8d1ed58f80EA988D52a',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
        },
        masterChefPid: 5,
        jarAddresses: {
            80001: '',
            1285: '0xb5f2f033113f8fa4f5Fe4BEd535e05ee308bcAbE',
        },



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 150 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/10/29"
    },
    {
        pid: 40,
        lpSymbol: 'USDT.m-MOVR LP',
        lpAddresses: {
            80001: '',
            1285: '0x037f019B6d98A61AF80c0da5ecFdc23612B0C134',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
        },
        masterChefPid: 0,
        jarAddresses: {
            80001: '',
            1285: '0xB816402B0EA623Fa669f59EE4F429BB9a919027e',
        },



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 500 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/10/29"
    },
    {
        pid: 41,
        lpSymbol: 'ETH.m-MOVR LP',
        lpAddresses: {
            80001: '',
            1285: '0xBaf9eB00574C42Cf678778790b04705B435B65F8',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
        },
        masterChefPid: 2,
        jarAddresses: {
            80001: '',
            1285: '0xaBd70eaEB9C0bb58b9b83A102E309ac764fd8801',
        },



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 500 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/10/29"
    },
    {
        pid: 42,
        lpSymbol: 'BTC.m-MOVR LP',
        lpAddresses: {
            80001: '',
            1285: '0x3fAF6e9Bf107199dB347B146F80A68CBD0B598B2',
        },
        masterChefAddresses: {
            80001: '',
            1285: '0x1f4b7660b6AdC3943b5038e3426B33c1c0e343E6',
        },
        masterChefPid: 3,
        jarAddresses: {
            80001: '',
            1285: '0x6FC9F91C3db0190184849fF8d7C92E7d35158F2e',
        },



        rewardPerBlock: 7.6 * 2 / 12, // Fix reward block time
        poolWeightDesignate: 500 / 10245,
        minutesPerCompound: 60,
        kogefarmFee: 0.01,
        underlyingWebsite: 'https://www.huckleberry.finance/',
        platform: 'Huckleberry',
        createdAt: "2021/10/29"
    },
  ]
}
