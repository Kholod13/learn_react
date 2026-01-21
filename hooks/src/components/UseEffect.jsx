import React, { useState } from "react";
import { useEffect } from "react";

export default function UseEffect(){

    useEffect(() => {
        const now = new Date();
        console.log(`Hello at ${now}`);
    }, [])

    const [count, setCount] = useState(0);
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Space") {
                // ПРЕДОТВРАЩАЕМ СКРОЛЛ: Пробел обычно листает страницу вниз, 
                // в приложениях это лучше отключать.
                event.preventDefault(); 

                // ИСПОЛЬЗУЕМ CALLBACK: prev - это текущее значение в памяти
                setCount((prev) => prev + 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return() => {
            window.removeEventListener('keydown', handleKeyDown);
        }

    }, [])

    useEffect (() => {
        if(count >= 10){
            document.body.style.backgroundColor = 'fff';
        }else{
            document.body.style.backgroundColor = '#0f171a';
        }

        return () => {
            document.body.style.backgroundColor = "";
        };
    }, [count])

    const [user, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoading(true);

                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if(!response.ok){
                    throw new Error('Ошибка при загрузке данных');
                }

                const data = await response.json();
                setUsers(data);
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    if(loading) return <h1 className="font-bold mb-6">Loading</h1>
    if(error) return <h1 className="font-bold mb-6">Error: {error}</h1>

    return (
        <>
            <h1 className="font-bold mb-6">UseEffect</h1>
            <div>
                <h2 className="font-bold text-2xl mb-4">Press SPACE for count <br /> Counter = {count}</h2>
            </div>
            <div className="flex flex-col">
                {user.map(user => (
                    <p key={user.id}>{user.name} - {user.email}</p>
                ))}
            </div>

        </>
    )
}