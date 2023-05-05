import wbtc from '../components/Main/images/WBTC.svg';
import weth from '../components/Main/images/WETH.svg';
import usdc from '../components/Main/images/USDC.svg';
import wmatic from '../components/Main/images/WMATIC.svg';
import dai from '../components/Main/images/DAI.svg';

export const data = [
  {
    name: 'WBTC-WETH',
    price: 0.13,
    images: [wbtc, weth],
  },
  {
    name: 'USDC-WETH',
    price: 0.04,
    images: [usdc, weth],
  },
  {
    name: 'USDC-WBTC',
    price: 0.08,
    images: [usdc, wbtc],
  },
  {
    name: 'WETH-WMATIC',
    price: 0.04,
    images: [weth, wmatic],
  },
  {
    name: 'USDC-WMATIC',
    price: 0.04,
    images: [usdc, wmatic],
  },
  {
    name: 'WBTC-WETH-USDC',
    price: 0.0,
    images: [wbtc, weth, usdc],
  },
  {
    name: 'WBTC-WETH-WMATIC',
    price: 0.08,
    images: [wbtc, weth, wmatic],
  },
  {
    name: 'DAI-USDC-WBTC',
    price: 0.05,
    images: [dai, usdc, wbtc],
  },
  {
    name: 'DAI-WETH-WBTC',
    price: 0.08,
    images: [dai, weth, wbtc],
  },
];
