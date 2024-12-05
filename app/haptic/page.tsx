"use client"

import { useState } from "react"

export default function Haptic() {

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


   return <div className="p-6 pl-16">
            <div className="flex justify-between pr-10">
                {
                    [1, 2, 3, 4].map((number, id) =>
                    <div
                        key={id}
                        onChange={handleChange}
                        className="bg-slate-800 w-10 h-10 p-6">      
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

    <div className="number-container w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit, id) => <div
            onClick={(payload) => handleAddDigit(digit)}
            className="bg-slate-800 flex justify-center items-center my-8 h-20 w-20"
            key = {id}
            >
            {digit}
        </div>)
        }
        <div 
            onClick={() => setShow(!show)}
            className="bg-slate-800 flex justify-center items-center my-8 h-20 w-20">
            {show ? 'Hide' : 'show'}
        </div>
        <div 
            onClick={(payload) => handleAddDigit(0)}
            className="bg-slate-800 flex justify-center items-center my-8 h-20 w-20">
           0
        </div>
        <div 
            onClick={handleDelete}
            className="bg-slate-800 flex justify-center items-center my-8 h-20 w-20">
            Delete
        </div>
    </div>
   </div>
}