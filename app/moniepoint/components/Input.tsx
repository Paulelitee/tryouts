"use client"

import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { useState } from "react"

export default function Input() {
           //function that handles changes on the input
            const gridItemClass = "bg-slate-800 rounded-full bg-transparent font-bold border border-zinc-700 flex justify-center items-center"
            const [ value, setValue ] = useState('')
            const [ show, setShow ] = useState(true)


    return <div>
         {
                    [1, 2, 3, 4, 5, 6].map((number, id) =>
                    <div
                        key={id}
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
}
