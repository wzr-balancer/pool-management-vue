import merge from 'lodash/merge';
import registry from '@balancer-labs/assets/generated/pm/registry.homestead.json';
import registryKovan from '@balancer-labs/assets/generated/pm/registry.kovan.json';
import homestead from '@/config/homestead.json';
import kovan from '@/config/kovan.json';
import rinkeby from '@/config/rinkeby.json';

import {bsc} from '@/config/bsc.js';
import { bsctestnet } from '@/config/bsctestnet.js';


const registryRinkeby = {
  tokens: {
    '0xc778417E063141139Fce010982780140Aa0cD5Ab': {
      address: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
      id: 'weth',
      name: 'Wrapped Ether',
      symbol: 'WETH',
      decimals: 18,
      precision: 4,
      color: '#828384',
      hasIcon: false,
      logoUrl:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
    }
  },
  untrusted: []
};

const registryBSC = {
  tokens: {
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c': {
      address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      id: 'WBNB',
      name: 'Wrapped BNB',
      symbol: 'WBNB',
      decimals: 18,
      precision: 4,
      color: '#828384',
      hasIcon: false,
      logoUrl:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png'
    }
  },
  untrusted: []
};
const registryBSCTestnet = {
  tokens: {
    '0xae13d989dac2f0debff460ac112a837c89baa7cd': {
      address: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      id: 'WBNB',
      name: 'Wrapped BNB',
      symbol: 'WBNB',
      decimals: 18,
      precision: 4,
      color: '#828384',
      hasIcon: false,
      logoUrl:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png'
    }
  },
  untrusted: []
};
const configs = { homestead, kovan, rinkeby, bsc, bsctestnet };
configs.homestead = merge(registry, configs.homestead);
configs.kovan = merge(registryKovan, configs.kovan);
configs.rinkeby = merge(registryRinkeby, configs.rinkeby);
configs.bsc = merge(registryBSC, configs.bsc);
configs.bsctestnet = merge(registryBSCTestnet, configs.bsctestnet);


const network = process.env.VUE_APP_NETWORK || 'homestead';

const config = configs[network];
config.env = process.env.VUE_APP_ENV || 'staging';

export default config;
