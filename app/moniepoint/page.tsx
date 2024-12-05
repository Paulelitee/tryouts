"use client"

import { useState } from "react"
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import DeleteSVG from "../svgComponents/DeleteSVG"
import ArrowSVG from "../svgComponents/ArrowSVG"
import Image from "next/image"

export default function Haptic() {

    const gridItemClass = "bg-slate-800 rounded-full bg-transparent font-bold border border-zinc-700 flex justify-center items-center"

    const [ value, setValue ] = useState('')
    const [ show, setShow ] = useState(true)

    //function that listens to the click of numbers and adds them to the input pin
    const handleAddDigit = (payload: number | undefined) => {
        if(value.length < 6) {
            setValue(value.concat(payload!.toString()))
        } else return null
    }

        //function that handles changes on the input
    const handleChange = () => {
        console.log('handle digit')
    }

    const handleDelete = () => {
        setValue(value.slice(0, -1))
        console.log(value)
    }


   return <div className="bg-slate-950 p-4 min-h-screen flex flex-col items-center">
            <Image src = {'/assets/memoji.png'} width={80} height={80} alt="memoji"/>
                <h1 className="text-3xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-500 bg-clip-text text-transparent">
                    Welcome back!
                </h1> 
                <p className="font-normal text-xs opacity-80">Enter your 6 digit passcode</p>        
                <div className="gap-2 flex justify-start p-5">
                {
                    [1, 2, 3, 4, 5, 6].map((number, id) =>
                    <div
                        key={id}
                        onChange={handleChange}
                        className="bg-slate-900 w-10 h-10 rounded-lg">      
                    </div>
                    )
                }
            <div className="absolute input-container gap-2 border-yellow-400">
                {value.split('').map((digit, id) =>
                <div  key = {id} className="h-10 w-10 flex border border-yellow-400 rounded-lg justify-center items-center">
                    {
                        show ? <div
                            className="w-2 h-2 bg-slate-200 rounded-full">
                        </div> :
                        <AnimatePresence>
                        {!show && (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0.5 }} // Adjusted exit animation for smoothness
                                transition={{ ease: easeInOut, duration: 0.2 }} // Increased duration slightly for better visibility
                                className="text-slate-300 font-bold"
                            >
                                {digit}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    }
                </div>)}
            </div>

    </div>

    <div className="number-container px-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit, id) => <motion.div
            whileTap={{
                scale: 0.9,
                borderColor: '#fbbf24'  
            }}
            onClick={() => handleAddDigit(digit)}
            className={gridItemClass}
            key = {id}
            >
            {digit}
        </motion.div>)
        }
        <motion.div 
             whileTap={{
                scale: 0.8,
                borderColor: '#fbbf24'     
            }}
            onClick={handleDelete}
            className={gridItemClass}
        >
            <DeleteSVG />
        </motion.div>
        <motion.div
            whileTap={{
                scale: 0.8,
                borderColor: '#fbbf24'     
            }} 
            onClick={() => handleAddDigit(0)}
            className={gridItemClass}>
           0
        </motion.div>
        {value.length > 5 ? <div
                className={'rounded-full text-slate-950 flex justify-center items-center bg-yellow-400'}>
                    <ArrowSVG />
                </div>
        : <motion.div
            whileTap={{
                scale: 0.8,  
                borderColor: '#fbbf24'    
            }} 
            onClick={() => setShow(!show)}
            className={`${gridItemClass}`}>
            <p className="text-sm font-medium">{show ? 'Show' : 'Hide'}</p>
        </motion.div>
            }
    </div>

    <p className="text-yellow-400 font-light">Forgot password?</p>
   </div>
}