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

    const [string, setString] = useState('');
    const prevTextRef = useRef('');

    useEffect(() => {
        prevTextRef.current = string;
    }, [string]);

    const [messages, setMessages] = useState([]);
    const messageRef = useRef(null);
    const [err, setErr] = useState(false)

    const handleAddMessage = () => {
        if(string != ''){
            setMessages([...messages, string]);

        }else{
            setErr(true);
        }
        console.log(messages);
        setString('');
    }
    useEffect(() => {
        if (messageRef.current) {
        // Используем setTimeout на 0 мс, чтобы скролл сработал ПОСЛЕ того, 
        // как браузер отрисует новый элемент
        const scrollTimeout = setTimeout(() => {
            messageRef.current.scrollTo({
                top: messageRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }, 10);
        
        return () => clearTimeout(scrollTimeout);
    }

    }, [messages]);
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
            <div>
                <input value={string} onChange={(e) => setString(e.target.value)} className="p-2 w-full border-solid focus:border-white border-black border-2 rounded-xl m-8" type="text" />
                
                <p>WAS: {prevTextRef.current}</p>
                <p>NOW: {string}</p>
                <p className="text-red-800 m-4 font-bold">{!err ? ' '  : 'Your string is empty'}</p>
                <button onClick={handleAddMessage}>Add message</button>
            </div>
            <div ref={messageRef} className="h-[500px] overflow-y-auto bg-gray-500 mt-4 flex flex-col">
                {messages.map((text, index) => (
                    <p key={index} className="bg-black p-3 rounded-2xl m-2">{text}</p>
                ))}
            </div>
        </>
    )
}