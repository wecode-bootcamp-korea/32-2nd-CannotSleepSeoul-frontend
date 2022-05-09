import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  button {
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:visited {
      color: inherit;
    }
  }
`;

export default GlobalStyle;
