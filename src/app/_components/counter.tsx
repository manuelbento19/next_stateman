"use client"
import React, { useState } from 'react'

export function Counter() {
    console.log("Counter","Rendered")
    const [count,setCount] = useState(0); 

    const descrement = () => setCount(prev=>prev-1);
    const increment = () => setCount(prev=>prev+1);

    return (
       <div className='flex flex-col gap-3 m-auto'>
            <h2 className='text-lg font-medium text-center'>Counter</h2>
            <div className='flex items-center gap-2'>
                <button onClick={descrement} className='text-white px-3 py-2 text-base w-10 shadow rounded-md bg-cyan-950'>-</button>
                <input value={count} readOnly className='w-24 px-3 py-2 rounded border border-gray-300 outline-none sm:text-sm bg-transparent'/>
                <button onClick={increment} className='text-white px-3 py-2 text-base w-10 shadow rounded-md bg-cyan-950'>+</button>
            </div>
       </div>
    )
}