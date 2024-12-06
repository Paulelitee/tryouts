"use client"

export default function Cart() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <button className="px-6 py-2 rounded text-white font-bold animate-gradient bg-gradient-to-r from-orange-500 via-pink-500 to-amber-500 bg-[length:200%_200%] transition-all duration-200 ease-in-out">
                Add to Cart
            </button>
            <style jsx>{`
                @keyframes gradientAnimation {
                    0% {
                        background-position: 0% 50%;
                    }
                    30% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradientAnimation 3s ease infinite;
                }
            `}</style>
        </div>
    );
}
