import { useEffect, useRef } from 'react'

function CustomCursor() {
    const cursorRef = useRef(null)

    useEffect(() => {
        const cursorDot = cursorRef.current
        if (!cursorDot) return

        let mouseX = window.innerWidth / 2
        let mouseY = window.innerHeight / 2
        let dotX = mouseX
        let dotY = mouseY

        const handlePointerMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY

            const linkEl = e.target.closest('a, [role="link"], button')
            const mediaEl = e.target.closest('img, video, .project-card, #hero-avatar-wrapper')
            const textEl = e.target.closest('h1, h2, h3, h4, h5, h6, p, span, li')

            cursorDot.classList.remove("link-hover", "media-hover", "text-hover")
            if (linkEl) {
                cursorDot.classList.add("link-hover")
            } else if (mediaEl) {
                cursorDot.classList.add("media-hover")
            } else if (textEl) {
                cursorDot.classList.add("text-hover")
            }
        }

        function animate() {
            dotX += (mouseX - dotX) * 0.2
            dotY += (mouseY - dotY) * 0.2
            cursorDot.style.setProperty('--x', `${dotX}px`)
            cursorDot.style.setProperty('--y', `${dotY}px`)
            requestAnimationFrame(animate)
        }

        document.addEventListener("pointermove", handlePointerMove, { passive: true })
        requestAnimationFrame(animate)

        return () => {
            document.removeEventListener("pointermove", handlePointerMove)
        }
    }, [])

    return <div ref={cursorRef} className="cursor-dot"></div>
}

export default CustomCursor
