import React from "react";
import RoutesApp from './routes'
import { GlobalStyled } from "./GlobalStyled";
import GlobalState from "./context/GlobalContext/GlobalState";

function App() {
  return (
    <>
    <GlobalState>
      <GlobalStyled/>
      <RoutesApp />
    </GlobalState>
   
    </>
  );
}

export default App;
