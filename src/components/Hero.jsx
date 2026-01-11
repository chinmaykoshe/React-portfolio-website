import { useEffect, useRef } from 'react'
import bgImage from '../assets/bg.png'
import meImage from '../assets/me.png'

function Hero() {
    const avatarWrapperRef = useRef(null)
    const avatarImgRef = useRef(null)

    useEffect(() => {
        const avatarWrapper = avatarWrapperRef.current
        const avatarImg = avatarImgRef.current
        if (!avatarWrapper || !avatarImg) return

        let isActive = false

        function scaleImage(x, y) {
            const maxOffset = 20
            const offsetX = Math.max(Math.min(x / 10, maxOffset), -maxOffset)
            const offsetY = Math.max(Math.min(y / 10, maxOffset), -maxOffset)
            avatarImg.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.15)`
        }

        function resetImage() {
            avatarImg.style.transform = "translate(0px, 0px) scale(1)"
        }

        function updateRingEffect(x, y) {
            const rect = avatarWrapper.getBoundingClientRect()
            const posX = ((x - rect.left) / rect.width) * 100
            const posY = ((y - rect.top) / rect.height) * 100
            avatarWrapper.style.setProperty("background", `radial-gradient(circle at ${posX}% ${posY}%, rgba(0, 255, 217, 0.7), transparent 60%)`)
        }

        const handlePointerEnter = () => { isActive = true }
        const handlePointerLeave = () => { 
            isActive = false
            resetImage()
            avatarWrapper.style.setProperty("background", `radial-gradient(circle at center, rgba(0, 255, 217, 0.6), transparent 60%)`)
        }
        const handlePointerMove = (e) => {
            if (!isActive) return
            const rect = avatarWrapper.getBoundingClientRect()
            const x = e.clientX - (rect.left + rect.width / 2)
            const y = e.clientY - (rect.top + rect.height / 2)
            scaleImage(x, y)
            updateRingEffect(e.clientX, e.clientY)
        }

        avatarWrapper.addEventListener("pointerenter", handlePointerEnter)
        avatarWrapper.addEventListener("pointerleave", handlePointerLeave)
        avatarWrapper.addEventListener("pointermove", handlePointerMove, { passive: true })

        return () => {
            avatarWrapper.removeEventListener("pointerenter", handlePointerEnter)
            avatarWrapper.removeEventListener("pointerleave", handlePointerLeave)
            avatarWrapper.removeEventListener("pointermove", handlePointerMove)
        }
    }, [])

    return (
        <section id="about" className="min-h-screen flex items-center justify-center text-center will-change-transform">
            <div className="justify-center">
                <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-center">
                    <div className="sm:w-4/5 w-full flex flex-col justify-center items-center text-center fade-up">
                        <h2 className="mt-4 md:mt-0 text-2xl md:text-2xl mb-2 flex items-center justify-center gap-2">
                            Hello
                            <span className="inline-block text-3xl md:text-4xl animate-wave-effect origin-center">👋</span>
                        </h2>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold whitespace-nowrap">
                            It's <span className="text-[#00ffd9] drop-shadow-md">CHINMAY KOSHE</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                            a full-stack dev.
                        </h2>
                        <div className="mt-4 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-6 text-base sm:text-md">
                            <p>⚡ 5+ Projects Built</p>
                            <p>🚀 Looking to grow in real-world teams</p>
                        </div>
                    </div>

                    <div className="sm:w-2/5 w-full flex justify-center items-center relative fade-up delay-200">
                        <div 
                            ref={avatarWrapperRef}
                            id="hero-avatar-wrapper"
                            className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden group touch-none"
                        >
                            <img 
                                src={bgImage} 
                                alt="Background"
                                className="absolute w-full h-full object-cover pointer-events-none" 
                            />
                            <img 
                                ref={avatarImgRef}
                                id="hero-avatar-img" 
                                src={meImage} 
                                alt="Chinmay Koshe"
                                className="relative w-full h-full object-cover scale-110 transition-transform duration-300 ease-out pointer-events-auto border-4 border-[#00ffd9] rounded-full z-10" 
                            />
                            <div className="absolute inset-0 rounded-full border-4 border-[#00ffd9] opacity-80 pointer-events-none z-20 transition-all duration-500 group-hover:shadow-[0_0_40px_10px_#00ffd9]">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <a href="#Tech-Stack"
                        className="inline-block text-[#00ffd9] border border-[#00ffd9] px-6 py-3 rounded-full text-base sm:text-lg hover:bg-[#00ffd9] hover:text-black transition-all duration-300 animate-bounce">
                        Scroll Down ↓
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero