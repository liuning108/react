import React, {useEffect, useState} from "react";

const LikeButton : React.FC = ()=>{
   const  [like,setLike]= useState(0)
   const  [on,setOn] = useState(true)
    useEffect(()=>{
        document.title="点击了多少次"+like
    })
   return (
       <>
           <button onClick={()=>{setLike(like+1)}}>
               {like} 赞！
           </button>
           <button onClick={()=>setOn(!on)}>
               {on?"ON":"OFF"}
           </button>
       </>
   )
}

export default LikeButton