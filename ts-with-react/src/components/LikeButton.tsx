import React, {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../App";

const LikeButton : React.FC = ()=>{
   const  [like,setLike]= useState(0)
   const  [on,setOn] = useState(true)
   const  theme = useContext(ThemeContext)
    console.log(theme)
    useEffect(()=>{
        document.title="点击了多少次"+like
    })
   return (
       <>
           <button style={theme} onClick={()=>{setLike(like+1)}}>
               {like} 赞！
           </button>
           <button onClick={()=>setOn(!on)}>
               {on?"ON":"OFF"}
           </button>
       </>
   )
}

export default LikeButton