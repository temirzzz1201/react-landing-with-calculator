import { createGlobalStyle } from 'styled-components';

import Druk from './DrukCyr-Medium/druktextcy-medium.woff';
import Druk2 from './DrukCyr-Medium/druktextcy-medium.woff2';
import Graphik from './GraphikLCG-Regular/GraphikLCG-Regular.woff';
import Graphik2 from './GraphikLCG-Regular/GraphikLCG-Regular.woff2';
import Punctuation from './Punctuation/PUNCTUATION-Medium.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'Graphik';
    src: local('Font Name'), local('FontName'),
    url(${Graphik}) format('woff'),
    url(${Graphik2}) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Druk';
    src: local('Font Name'), local('FontName'),
    url(${Druk}) format('woff2'),
    url(${Druk2}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Punctuation';
    src: local('Font Name'), local('FontName'),
    url(${Punctuation}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;
