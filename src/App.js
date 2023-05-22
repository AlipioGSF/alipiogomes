import { useContext, useEffect, useState } from "react";
import Header from "./Components/header";
import Home from "./Components/home";
import Portfolio from "./Components/portfolio";
import Experience from "./Components/expirience";

function App() {
  const [sp,setSp] = useState(0);
  const[visible, setVisible] = useState(true);

  window.addEventListener('scroll', ()=>{
    sp>window.scrollY?setVisible(true):setVisible(false);
    setSp(window.scrollY);
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
    </div>
  );
}

export default App;
