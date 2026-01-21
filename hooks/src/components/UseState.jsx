import React, { useState } from "react";
import '../App.css'

export default function UseState (){
    //svetofor
    const [color, setColor] = useState('red');
    const changeColor = () => {
        if(color === 'red'){
            setColor('yellow');
        }else if(color === 'yellow'){
            setColor('green');
        }else if(color === 'green'){
            setColor('red')
        }
        return color;
    }

    //textarea
    const [symbols, setSymbols] = useState('');

    //password
    const [button, setButton] = useState('Hide');

    const showingPassword = () => {
        if(button === 'Hide'){
            setButton('Show');
        }else{
            setButton('Hide');
        }
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <h1 className="text-9xl font-bold ">
                    Светофор
                </h1>
                <div className="flex m-10 gap-5">
                    <div className={color === 'red' ? "rounded-full bg-red-500 w-28 h-28" : "rounded-full bg-gray-400 w-28 h-28"}></div>
                    <div className={color === 'yellow' ? "rounded-full bg-yellow-400 w-28 h-28" : "rounded-full bg-gray-400 w-28 h-28"}></div>
                    <div className={color === 'green' ? "rounded-full bg-green-500 w-28 h-28" : "rounded-full bg-gray-400 w-28 h-28"}></div>
                </div>
                <button onClick = {changeColor} className="button m-10">Color</button>
            </div>
            <div className="flex flex-col">
                <h1 className="font-bold">Textarea</h1>
                <div className="flex flex-col">
                    <textarea value={symbols} onChange={(e) => setSymbols(e.target.value)} type="text" className="w-full h-28 border-solid border-white border-2 rounded-xl m-8" />
                    <p>{symbols.length} - 100</p>
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="font-bold">Password</h1>
                <div className="flex items-center ">
                    <input type={button === "Show" ? "password" : "text"} className="p-2 w-full border-solid border-white border-2 rounded-xl m-8" />
                    <button className="w-30" onClick={showingPassword}>{button}</button>
                </div>
            </div>
        </div>
    )
}