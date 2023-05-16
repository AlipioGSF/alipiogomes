import { useContext, useEffect } from "react";
import Header from "./Components/header";
import { LocalContext } from "./context/localContext";
import Home from "./Components/home";
import Portfolio from "./Components/portfolio";

function App() {
  const {currentLocal} = useContext(LocalContext);

  return (
    <div className="App">
      <Header/>
      {
        currentLocal === "Sobre Mim"?
          <Home/>
        :currentLocal === "Portfólio"?
          <Portfolio/>
        :null
      }
      <div style={{height: '300vh'}}></div>
    </div>
  );
}

export default App;
