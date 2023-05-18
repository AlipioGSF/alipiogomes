import { useContext, useEffect, useState } from "react";
import Header from "./Components/header";
import Home from "./Components/home";
import Portfolio from "./Components/portfolio";

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
      <div style={{height: '300vh'}}></div>
    </div>
  );
}

export default App;
