import { useState } from "react";

function colorPicker() {

    const [color, setColor] = useState("#000000");

    const colorChanger = (event) => {
        setColor(event.target.value)
    }

    return(
        <div className="w-2/5 outline-cyan-500 outline outline-offset-4 mx-auto mt-64 text-center rounded-xl shadow-inner shadow-pink-300 ">
            <h1 className="text-5xl font-extrabold p-5 font-sans">Color Picker</h1>

            <div className="flex ml-32">
            <div >
            <label className="p-3">Select a Color</label>
            <input 
                    type="color"
                    value={color}
                    onChange={colorChanger} 
                    className="flex items-center w-32 h-32 mt-3 p-1"    
            />
            </div>
            <div className="`bg-${color}` p-5 mt-12 ml-4">
                <h2><b>Selected Color:</b> {color}</h2>
            </div>
            </div>
        </div>
    );
}
export default colorPicker;