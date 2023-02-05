import MainComponents from "./documentation/main/main";
import GlobalStyle from "./styles/globalStyle";
import { HashRouter } from "react-router-dom";
import React  from 'react';

export default function App(props: any) {

  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <MainComponents />
      </HashRouter>
    </>
  );
}
