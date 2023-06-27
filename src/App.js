import { useState } from "react";
import Header from "./Components/header";
import Home from "./Components/home";
import Portfolio from "./Components/portfolio";
import Experience from "./Components/expirience";
import Habilidades from "./Components/habilidades";
import Contato from "./Components/contato";

function App() {
  const [sp,setSp] = useState(0);
  const[visible, setVisible] = useState(true);


  window.addEventListener('scroll', ()=>{
    if(window.innerWidth >992){
      window.scrollY==0?setVisible(true):sp>window.scrollY?setVisible(true):setVisible(false);
      setSp(window.scrollY); 
    }else{
      setVisible(true);
    }
    });


  return (
    <div className="App">
      {
        visible?
        <Header/>
        :null
      }
          <Home/>
          <Portfolio/>
          <Experience/>
          <Habilidades/>
          <Contato/>
    </div>
  );
}

export default App;
