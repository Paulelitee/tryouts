"use client"

export default function Haptic() {

    if ('vibrate' in navigator) {
    return <>
    <button onClick={() => navigator.vibrate(200)}>haptic </button>
        
    </>
    } else return <> no haptic</>
}