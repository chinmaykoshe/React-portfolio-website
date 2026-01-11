import { useState } from 'react'
import confetti from 'canvas-confetti'

function ConfettiButton() {
    const [isHidden, setIsHidden] = useState(false)

    const handleClick = () => {
        for (let i = 0; i < 8; i++) {
            confetti({
                particleCount: 50,
                startVelocity: 40,
                spread: 360,
                angle: Math.random() * 360,
                origin: { x: Math.random(), y: Math.random() * 0.6 },
                colors: ['#00ffd9', '#ffffff', '#2c5364'],
                scalar: Math.random() * 0.6 + 0.4,
                drift: Math.random() * 2 - 1,
                gravity: 0.8
            })
        }
        setIsHidden(true)
    }

    return (
        <button
            id="confetti-btn"
            onClick={handleClick}
            className={`fixed bottom-6 right-6 z-50 bg-[#00ffd9] text-black text-3xl p-3 rounded-full shadow-lg hover:scale-110 transition ${isHidden ? 'hidden' : ''}`}
            aria-label="Celebrate"
        >
            🎉
        </button>
    )
}

export default ConfettiButton
