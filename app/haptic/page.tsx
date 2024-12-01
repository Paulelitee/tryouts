"use client"

export default function Haptic() {

    if ('vibrate' in navigator) {
    return <>
        haptic
    </>
    } else return <> no haptic</>
}