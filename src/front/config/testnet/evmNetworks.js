import web3 from './web3'
import link from './link'

export default {
  ETH: {
    currency: 'ETH',
    chainId: '0x4',
    networkVersion: 4,
    chainName: 'Rinkeby Test Network',
    rpcUrls: [web3.provider],
    blockExplorerUrls: [link.etherscan]
  },
  BNB: {
    currency: 'BNB',
    chainId: '0x61',
    networkVersion: 97,
    chainName: 'Binance Smart Chain Testnet',
    rpcUrls: [web3.binance_provider],
    blockExplorerUrls: [link.bscscan]
  },
  MATIC: {
    currency: 'MATIC',
    chainId: '0x13881',
    networkVersion: 80001,
    chainName: 'Matic Mumbai Testnet',
    rpcUrls: [web3.matic_provider],
    blockExplorerUrls: [link.maticscan]
  },
  ARBETH: {
    currency: 'ARBETH',
    chainId: '0x66EEB',
    networkVersion: 421611,
    chainName: 'Arbitrum Testnet',
    rpcUrls: [web3.arbitrum_provider],
    blockExplorerUrls: [link.arbitrum]
  },
  AURETH: {
    currency: 'AURETH',
    chainId: '0x4e454154',
    networkVersion: 1313161556,
    chainName: 'Aurora Betanet',
    rpcUrls: [web3.aurora_provider],
    blockExplorerUrls: [link.auroraExplorer],
  },
  XDAI: {
    currency: 'XDAI',
    chainId: '0x4d',
    networkVersion: 77,
    chainName: 'Sokol testnet',
    rpcUrls: [web3.xdai_provider],
    blockExplorerUrls: [link.xdai]
  },
  FTM: {
    currency: 'FTM',
    chainId: '0xfa2',
    networkVersion: 4002,
    chainName: 'Fantom Testnet',
    rpcUrls: [web3.ftm_provider],
    blockExplorerUrls: [link.ftmscan],
  },
  AVAX: {
    currency: 'AVAX',
    chainId: '0xa869',
    networkVersion: 43113,
    chainName: 'Avalanche Testnet',
    rpcUrls: [web3.avax_provider],
    blockExplorerUrls: [link.avaxscan],
  },
  MOVR: {
    currency: 'MOVR',
    chainId: '0x507',
    networkVersion: 1287,
    chainName: 'Moonriver Testnet',
    rpcUrls: [web3.movr_provider],
    blockExplorerUrls: [link.movrscan],
  },
  ONE: {
    currency: 'ONE',
    chainId: '0x6357d2e0',
    networkVersion: 1666700000,
    chainName: 'Harmony One Testnet',
    rpcUrls: [web3.one_provider],
    blockExplorerUrls: [link.oneExplorer],
  },
  AME: {
    currency: 'AME',
    chainId: '0xb5',
    networkVersion: 181,
    chainName: 'AME Chain Testnet',
    rpcUrls: [web3.ame_provider],
    blockExplorerUrls: [link.amescan],
  },
  GOAT: {
    currency: 'GOAT',
    chainId: '0x2a',
    networkVersion: 3,
    chainName: 'Chikochain',
    rpcUrls: [web3.ame_provider],
    blockExplorerUrls: [link.amescan],
  },
  PHI: {
    currency: 'PHI',
    chainId: '',
    networkVersion: 0,
    chainName: 'PHI Network',
    rpcUrls: [web3.phi_provider],
    blockExplorerUrls: [link.phiExplorer],
  },
  PHI_V2: {
    currency: 'PHI_V2',
    chainId: '',
    networkVersion: 0,
    chainName: 'PHI-V2 Network',
    rpcUrls: [web3.phi_v2_provider],
    blockExplorerUrls: [link.phi_v2Explorer],
  },
}
