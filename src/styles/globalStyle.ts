import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

export const scroll = css`
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #0063f7 #ffffff;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: 0;
    border-radius: 10px;
    background-color: #ffffff;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background-color: #0063f7;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #0063f7;
  }
`;

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f7f6f6;
    color: #03001C;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    line-height: 20px;
  }
  
  ${scroll}

  a {
    text-decoration: none;
    color: initial;
  }

  label {
    font-size: 12px;
  }

`;
