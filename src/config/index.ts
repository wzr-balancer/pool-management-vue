import merge from 'lodash/merge';
import matic from '@/config/matic.json';

const registerMatic = {
  tokens: {
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270': {
      address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      id: 'matic-network',
      name: 'Wrapped Matic',
      symbol: 'WMATIC',
      decimals: 18,
      precision: 2,
      color: '#2875ca',
      hasIcon: false,
      iconAddress: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0'
    },
    '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619': {
      address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      id: 'weth',
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      precision: 4,
      color: '#828384',
      hasIcon: false,
      iconAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
    },
    '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063': {
      address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
      id: 'dai',
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      precision: 2,
      color: '#fab323',
      hasIcon: false,
      iconAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F'
    },
    '0x2791bca1f2de4661ed88a30c99a7a9449aa84174': {
      address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      id: 'usd-coin',
      name: 'USD Coin',
      symbol: 'USDC',
      decimals: 6,
      precision: 2,
      color: '#fab323',
      hasIcon: false,
      iconAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
    },
    '0x1DBb7f76CDC5413eE211ff4100723791B2d98c05': {
      address: '0x1DBb7f76CDC5413eE211ff4100723791B2d98c05',
      id: 'uniswap',
      name: 'TT01',
      symbol: 'TT01',
      decimals: 18,
      precision: 4,
      color: '#5eb8aa',
      hasIcon: false,
      iconAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
    },
    '0xd07B432B565AE10C6Dc0739989Ee3CF36A8dFf29': {
      address: '0xd07B432B565AE10C6Dc0739989Ee3CF36A8dFf29',
      id: 'wazirx',
      name: 'TT02',
      symbol: 'TT02',
      decimals: 18,
      precision: 4,
      color: '#5eb8aa',
      hasIcon: false,
      iconAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
    }
  },
  untrusted: [
    '0xbef02f140BFb37a75Ed6510e8D85C9E9e7e0ff1e',
    '0xe7d8E7742ca6906a14F7e46770Fdfe6B7014e62D',
    '0xEC4b4fFfb58B6c85D41025b07d93167B8192062E'
  ]
};

const configs = { matic };
configs.matic = merge(registerMatic, configs.matic);
const network = process.env.VUE_APP_NETWORK || 'matic';
const config = configs[network];
config.env = process.env.VUE_APP_ENV || 'staging';

export default config;
