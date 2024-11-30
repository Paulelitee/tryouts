"use client"

import { useState } from "react"

const progressArray = [
    1, 2, 3, 4
]

const active = 'bg-teal-300 w-6 h-6 rounded-full flex justify-center items-center text-teal-950 text-sm font-bold'
const inActive =  'bg-zinc-300 w-6 h-6 rounded-full flex justify-center items-center text-teal-950 text-sm font-bold'
export default function ProgressBar() {

    const [ status, setStatus ] = useState(1)
    const [nextTitle, setNextTitle] = useState('next')

    function handlePrevious() {
        if(status > 1) {
            setNextTitle('next')
            setStatus(status - 1)
        } else {setStatus(1)}
    }

    function handleNext() {
        if(status < 3) {
            setNextTitle('next')
            setStatus(status + 1)
        }  else {
            setNextTitle('Submit')
            setStatus(4)
        }
    }

    return <div className="w-full flex flex-col gap-10 relative">
        <div className="w-full absolute bg-yellow-500 w-full progress-shadow"> </div>
        <div style = {{width: `${((status - 1)/3) * 100}%`}} className={`w-full absolute bg-yellow-500 progress-main`}> </div>
        
        <div className="flex justify-between w-full">
            {progressArray.map(progress => <div
                    className={status >= progress ? active : inActive}
                    key={progress}>{progress}</div>)}
        </div>

        <div className="flex justify-between">
            <button
                onClick={handlePrevious}
                className="bg-zinc-9950 border border-zinc-500 px-4 py-2 rounded-lg">Previous</button>
            <button
                onClick={handleNext}
                className={`${status === 4 ? 'bg-teal-600' : 'bg-zinc-950'} border border-zinc-500 px-4 py-2 rounded-lg capitalize`}>{nextTitle}</button>
        </div>
    </div>
}