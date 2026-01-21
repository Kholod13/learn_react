import React, { useEffect } from "react"
import { useRef, useState } from "react"
export default function UseRef(){

    const [text, setText] = useState('');

    const [arr, setArr] = useState([]);
    const inputF = useRef();

    const handleClick = () => {
        inputF.current.focus();
        setArr([...arr, text]);
        setText('');
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Enter") {
                // ПРЕДОТВРАЩАЕМ СКРОЛЛ: Пробел обычно листает страницу вниз, 
                // в приложениях это лучше отключать.
                event.preventDefault(); 

                // ИСПОЛЬЗУЕМ CALLBACK: prev - это текущее значение в памяти
                handleClick();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return() => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [text])
    return(
        <>
            <h1 className="text-9xl font-bold">UseRef</h1>
            <div className="flex items-center ">
                <input ref={inputF} value={text} onChange={(e) => setText(e.target.value)} className="p-2 w-full border-solid focus:border-white border-black border-2 rounded-xl m-8" type="text"></input>
                <button onClick={handleClick}>enter</button>
            </div>
            <div>
                {arr.map(a => (
                    <p key={a}>{a}</p>
                ))}
            </div>
        </>
    )
}