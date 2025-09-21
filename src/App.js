import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import RightSidebar from "./components/RightSidebar";
import Cards from "./components/Cards";




const App=()=>{
    const header5Url = new URL("./assets/location.svg", import.meta.url).href;
    return (
       <>
        <Header/>
        <img src="/images/contacts-4.svg"  />
        <RightSidebar/>
        <Cards/>
        <img src={header5Url} alt="header"  />
  
        
        
    



        </>
    )
}

const root =ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>)
