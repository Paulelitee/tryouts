"use client"

import { useState } from "react"

export default function Haptic() {

    const gridItemClass = "bg-transparent focus:bg-zinc-900 border border-zinc-700 rounded-lg flex justify-center items-center"

    const [ value, setValue ] = useState('')
    const [ show, setShow ] = useState(true)

    //function that listens to the click of numbers and adds them to the input pin
    const handleAddDigit = (payload: number | undefined) => {
        if(value.length < 4) {
            setValue(value.concat(payload!.toString()))
        } else return null
    }

        //function that handles changes on the input
    const handleChange = () => {
        console.log('handle digit')
    }

    const handleDelete = () => {
        setValue(value.slice(1))
        console.log(value)
    }


   return <div className="px-8 py-12 flex flex-col items-center gap-4">
            <h1 className="text-3xl text-center">Enter your password</h1>
            <div className="gap-2 flex justify-start p-5">
                {
                    [1, 2, 3, 4].map((number, id) =>
                    <div
                        key={id}
                        onChange={handleChange}
                        className="bg-slate-800 w-10 h-10 p-6 rounded-lg">      
                    </div>
                    )
                }
        <div className="absolute input-container">
            {value.split('').map((digit, id) =>
            <div  key = {id} className="h-12 w-12 flex justify-center items-center rounded">
                {
                    show ? <div
                        className="w-2 h-2 bg-slate-300 rounded-full">
                    </div> :
                    <div
                        className="">
                            {digit}
                    </div>
                }
            </div>)}
        </div>

    </div>

    <div className="number-container px-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit, id) => <div
            onClick={() => handleAddDigit(digit)}
            className={gridItemClass}
            key = {id}
            >
            {digit}
        </div>)
        }
        <div 
            onClick={() => setShow(!show)}
            className={gridItemClass}>
            {show ? 'show' : 'hide'}
        </div>
        <div 
            onClick={() => handleAddDigit(0)}
            className={gridItemClass}>
           0
        </div>
        <div 
            onClick={handleDelete}
            className={gridItemClass}
        >
            Delete
        </div>
    </div>
   </div>
}