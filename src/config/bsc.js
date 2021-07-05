export const bsc = {
  "network": "bsc",
  "chainId": 56,
  "defaultPrecision": 2,
  "rpcUrl": "https://bsc-dataseed.binance.org/",
  /**
   * Binance notes on WS Node: provided by community with no quality promised, building your node should be always the long term goal
   * wss://bsc-ws-node.nariox.org:443
   * (Shouldn't be use i tho) 
   */
  //"wsUrl": "wss://bsc-ws-node.nariox.org:443",
  "subgraphUrl": "https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-beta",
  "explorer": "https://rpc-mainnet.maticvigil.com/",
  "exchangeUrl": "https://pancakeswap.exchange/",
  "addresses": {
    
	  //balancer-core\contracts\BFactory.sol	
    "bFactory": "0x035E59E6c5bB488AD849C1d1A8Acdb0C63FFaED1",
    //bactions-proxy\contracts\BActions.sol
    "bActions": "0xd35Edb273312DFeB7FEE76C6a94D8780184284b3",  

    //Maker:dsProxyRegistry
    //https://docs.makerdao.com/build/dai.js/advanced-configuration/using-ds-proxy
    "dsProxyRegistry": "0x7d184d487605faD82B711783187A48cE6af78F4E",
    //balancer-lab\balancer-registry
    "proxy": "0x5dc7Afd01223C29193e9ca6e5F61f1DB1B87C404",
	  //repo: configurable-rights-pool
    "crpFactory": "0x58C89Ef437a6Ca05e4A5070582AA07691Ae59824",
	  //WBNB
    "weth": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
	
    //multicall.sol A general usage library included on  balancer-core-v2	
      "multicall": "0x24f3530b2107E6DD980fB7653aF751649B9D51fA",
    /**
     * Only V2:
     *  */  
      //balancer-core-v2\pkg\core\contracts\vault\Vault.sol
      "vault": "0x0",
  },
  "connectors": {
    "injected": {
      "id": "injected",
      "name": "MetaMask"
    },
    "walletconnect": {
      "id": "walletconnect",
      "name": "WalletConnect",
      "options": {
        "rpc": {
          "1": "https://cloudflare-eth.com"
        }
      }
    },
    "portis": {
      "id": "portis",
      "name": "Portis",
      "options": {
        "network": "mainnet",
        "dappId": "3f1c3cfc-7dd5-4e8a-aa03-71ff7396d9fe"
      }
    },
    "walletlink": {
      "id": "walletlink",
      "name": "Coinbase",
      "options": {
        "appName": "Pool management - Balancer",
        "darkMode": true,
        "chainId": 1,
        "ethJsonrpcUrl": "https://cloudflare-eth.com"
      }
    },
    "fortmatic": {
      "id": "fortmatic",
      "name": "Fortmatic",
      "options": {
        "apiKey": "pk_live_9CE8FD92E54684ED"
      }
    }
  }
}


