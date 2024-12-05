"use client"

import { useState } from "react"
import { AnimatePresence, easeInOut, motion } from 'framer-motion'

export default function Haptic() {

    const gridItemClass = "bg-transparent border border-zinc-700 rounded-lg flex justify-center items-center"

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
        setValue(value.slice(0, -1))
        console.log(value)
    }


   return <div className="px-8 py-12 flex flex-col items-center gap">
            <h1 className="text-3xl text-center">Enter your password</h1>
            <div className="gap-2 flex justify-start p-5">
                {
                    [1, 2, 3, 4].map((number, id) =>
                    <div
                        key={id}
                        onChange={handleChange}
                        className="bg-slate-900 w-12 h-12 rounded-lg">      
                    </div>
                    )
                }
            <div className="absolute input-container gap-2">
                {value.split('').map((digit, id) =>
                <div  key = {id} className="h-12 w-12 flex border border-sky-400 rounded-lg justify-center items-center">
                    {
                        show ? <div
                            className="w-2 h-2 bg-sky-300 rounded-full">
                        </div> :
                        <AnimatePresence>
                        {!show && (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0.5 }} // Adjusted exit animation for smoothness
                                transition={{ ease: easeInOut, duration: 0.2 }} // Increased duration slightly for better visibility
                                className=""
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
                borderColor: '#06b6d4'  
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
                scale: 0.9,    
            }}
            onClick={handleDelete}
            className={gridItemClass}
        >
            Delete
        </motion.div>
        <motion.div
            whileTap={{
                scale: 0.9,    
            }} 
            onClick={() => handleAddDigit(0)}
            className={gridItemClass}>
           0
        </motion.div>
        <motion.div
            whileTap={{
                scale: 0.9,    
            }} 
            onClick={() => setShow(!show)}
            className={value.length < 4 ? gridItemClass : `${gridItemClass} bg-sky-600`}>

            {value.length < 4 ? (show ? 'Show' : 'Hide') : 'Login'}
        </motion.div>
        
    </div>

    <p className="text-sky-400 font-light">Forgot password?</p>
   </div>
}