import Selection from "./Selection";
import { useState } from "react";

//create a color picker component
const ColorSelector = () => {
    //create a state to store the color
    const [nextBackground, setBackground] = useState("#fff");
    
    //create a function to change the color
    const changeColor = (e) => {
        setBackground(e.target.value);
    };
    
    //return the component
    return (
        <>
        <input type="color" value={nextBackground} onChange={changeColor} />
        <Selection
           applyColor={nextBackground}
        />
        </>
    );
    }


export default ColorSelector;