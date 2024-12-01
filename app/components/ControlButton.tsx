
"use client"

import { useState } from "react"


export default function ControlButton() {

    const [ status, setStatus ] = useState(0)

    function handlePrevious() {
        if(status > 0) {
        setStatus(status - 1)
        } else setStatus(0)
    }

    function handleNext() {
        if(status < 4) {
        setStatus(status + 1)
        } else setStatus(4)
    }

    return <div className="w-full flex justify-between">
                <button
                    onClick={handlePrevious}
                    className="bg-zinc-800 px-4 py-2 rounded-lg">Previous</button>
                <button
                    onClick={handleNext}
                    className="bg-teal-500 px-4 py-2 rounded-lg">Next
                </button>
        </div>
  
}