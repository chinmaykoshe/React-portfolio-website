import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import Bubbles from './components/Bubbles'
import ConfettiButton from './components/ConfettiButton'
import Message from './components/Message'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    // Preload images that will be used in the app
    const imageUrls = [
      '/images/rc.png',
      '/images/VC.png',
      '/images/ff.png',
      '/images/hh.png',
      '/images/mail-dot-ru.svg',
      '/images/github-logo.svg',
      '/images/linked.svg',
      '/images/live.png'
    ]

    if (imageUrls.length === 0) {
      const timer = setTimeout(() => {
        setLoadingProgress(1)
      }, 500)
      return () => clearTimeout(timer)
    }

    let loadedCount = 0
    const totalImages = imageUrls.length

    imageUrls.forEach((url) => {
      const img = new Image()
      img.onload = () => {
        loadedCount++
        setLoadingProgress(loadedCount / totalImages)
      }
      img.onerror = () => {
        loadedCount++
        setLoadingProgress(loadedCount / totalImages)
      }
      img.src = url
    })
  }, [isLoading])

  useEffect(() => {
    if (isLoading) return

    // Fade-up animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el))

    // Project card tilt effects
    const projectCards = document.querySelectorAll(".project-card")
    projectCards.forEach((card) => {
      let rAF = null
      const bounds = () => card.getBoundingClientRect()

      function onMove(e) {
        const b = bounds()
        const x = (e.clientX - b.left) / b.width
        const y = (e.clientY - b.top) / b.height
        const rotX = (y - 0.5) * -10
        const rotY = (x - 0.5) * 10
        if (!rAF) {
          rAF = requestAnimationFrame(() => {
            card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
            card.style.backgroundImage = `radial-gradient(400px circle at ${x * 100}% ${y * 100}%, rgba(0,255,217,0.15), transparent 40%)`
            rAF = null
          })
        }
      }

      function onLeave() {
        card.style.transform = ""
        card.style.backgroundImage = ""
      }

      card.addEventListener("pointermove", onMove, { passive: true })
      card.addEventListener("pointerleave", onLeave, { passive: true })
    })

    // Smooth anchor focus after jump
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", () => {
        const id = a.getAttribute("href")
        const target = document.querySelector(id)
        if (target) {
          setTimeout(() => target.setAttribute("tabindex", "-1"), 0)
        }
      }, { passive: true })
    })

    return () => {
      observer.disconnect()
      projectCards.forEach((card) => {
        card.removeEventListener("pointermove", onMove)
        card.removeEventListener("pointerleave", onLeave)
      })
    }
  }, [isLoading])

  if (isLoading) {
    return (
      <Loader onComplete={() => setIsLoading(false)} loadingProgress={loadingProgress} />
    )
  }

  return (
    <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white scroll-smooth relative min-h-screen">
      <Bubbles />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Message />
      <CustomCursor />
      <ConfettiButton />
    </div>
  )
}

export default App
