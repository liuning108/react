import React, {useEffect, useState} from "react";
//必需use开头
const useMousePosition = ()=>{
    const [positions,setPositions] = useState({x:0,y:0})
    useEffect(()=>{
        console.log('add useEffect')
        const updateMouse=(e:MouseEvent) =>{
            console.log('inner',positions.x)
            setPositions({
                x:e.clientX,
                y:e.clientY
            })
        }
        document.addEventListener('mousemove',updateMouse)
        return ()=>{
            console.log('remove effect')
            document.removeEventListener('mousemove',updateMouse)
        }
    },[])

    return positions
}
export  default  useMousePosition
