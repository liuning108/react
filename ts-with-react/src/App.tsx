import logo from './logo.svg';
import './App.css';
import LikeButton from "./components/LikeButton";
import MouseTracker from "./components/MouseTracker";

import withLoader from "./components/whitLoader";
import useURLLoader from "./hooks/useURLLoader";
import React, {useState} from "react";

interface IThemeProps{
  [key:string] : {color:string; background:string}
}
const themes :IThemeProps = {
    light:{
        color:"#000",
        background:"#eee"
    },
    dark:{
        color:"#fff",
        background:"#222"
    }

}

export const ThemeContext =React.createContext(themes.light)
const ImgShow = ({data}:any) =>{
   return (
      <>
        <h2>Image</h2>
        <img src={data.file}/>
      </>
  )
}



function App() {
  const WrappedImgShow= withLoader(ImgShow,"/json/g/320/240/girl/all")
  const [data,isloading]  = useURLLoader("/json/g/320/240/girl/all")
  const  [offon,setOff]  =useState(false)
  return (
    <div className="App">

        <ThemeContext.Provider value={offon?themes.dark:themes.light}>
                 <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          (isloading) ?
              <p>data loadding ...</p>
              :
              <img src={data.file||0}></img>
        }
        <LikeButton/>
        <MouseTracker/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
                     <button onClick={()=>setOff(!offon)}>
                         {offon?"on":"off"}
                     </button>
      </header>
        </ThemeContext.Provider>
    </div>
  );
}

export default App;
