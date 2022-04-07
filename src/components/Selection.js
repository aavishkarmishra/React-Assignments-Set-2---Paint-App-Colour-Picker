import { useEffect,useState } from "react";

import React from 'react'

const Subheading = () => {
  return (
    <div className="subheading">
        <h2>Selection</h2>
    </div>
  )
}


const Selection = (props) => {
    let [bg,setbg]=useState({background:'#fff'});
    useEffect(() => {
        setbg({background:props.applyColor});
    }, [props]);
    
    return (
        <>
        <Subheading/>
        <div style={bg} className="fix-box"></div>
        </>
    )
}

export default Selection;