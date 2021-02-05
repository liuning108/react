import React, {useEffect, useState} from "react";

const MouseTracker : React.FC=()=>{
    const [positions,setPositions] = useState({x:0,y:0})
    useEffect(()=>{
        console.log('add useEffect')
        const updateMouse=(e:MouseEvent) =>{
            console.log('inner')
            setPositions({
                x:e.clientX,
                y:e.clientY
            })
        }
        document.addEventListener('click',updateMouse)
        return ()=>{
            console.log('remove effect')
            document.removeEventListener('click',updateMouse)
        }
    })
    return (
        <p>X:{positions.x},Y:{positions.y}</p>
    )
}
export default MouseTracker