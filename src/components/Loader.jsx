import React, { useState, useEffect } from 'react'
import '../App.css'

function Loader({ onComplete, loadingProgress = 0 }) {
    const targetText = "CHINMAY KOSHE"
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    const getPreviousLetter = (letter) => {
        const index = alphabet.indexOf(letter)
        if (index <= 0) return alphabet[alphabet.length - 1]
        return alphabet[index - 1]
    }
    
    const getNextLetter = (letter) => {
        const index = alphabet.indexOf(letter)
        if (index >= alphabet.length - 1) return alphabet[0]
        return alphabet[index + 1]
    }
    const [completedLetters, setCompletedLetters] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentLetter, setCurrentLetter] = useState("A")
    const [isComplete, setIsComplete] = useState(false)
    
    // Calculate letter cycling speed based on loading progress
    // Faster loading = faster letter cycling (min 10ms, max 100ms)
    const getLetterSpeed = () => {
        // Progress is 0-1, we want faster when progress is higher
        // Inverse relationship: higher progress = lower delay = faster
        const baseSpeed = 100 // Base delay in ms
        const minSpeed = 10 // Minimum delay (fastest)
        const speed = baseSpeed - (loadingProgress * (baseSpeed - minSpeed))
        return Math.max(minSpeed, Math.min(baseSpeed, speed))
    }

    useEffect(() => {
        // If loading is complete (progress = 1), ensure typing completes
        if (loadingProgress >= 1 && currentIndex < targetText.length) {
            // Fast forward to complete the text
            const remaining = targetText.slice(currentIndex)
            setCompletedLetters(prev => [...prev, ...remaining.split('')])
            setCurrentIndex(targetText.length)
            return
        }

        if (currentIndex >= targetText.length) {
            setIsComplete(true)
            // After fill and scale animation completes, hide loader and show Hero
            const timer = setTimeout(() => {
                if (onComplete) {
                    onComplete()
                }
            }, 2700) // Total animation time: 0.2s delay + 0.8s fill + 1.2s scale + 0.5s fade
            return () => clearTimeout(timer)
        }

        const targetChar = targetText[currentIndex]
        
        // If it's a space, skip to next character immediately
        if (targetChar === " ") {
            setCompletedLetters(prev => [...prev, " "])
            setCurrentIndex(prev => prev + 1)
            setCurrentLetter("A")
            return
        }

        const targetIndex = alphabet.indexOf(targetChar.toUpperCase())
        
        if (targetIndex === -1) {
            // If character not in alphabet, add it directly
            setCompletedLetters(prev => [...prev, targetChar])
            setCurrentIndex(prev => prev + 1)
            setCurrentLetter("A")
            return
        }

        const currentLetterIndex = alphabet.indexOf(currentLetter)
        const letterSpeed = getLetterSpeed()
        
        if (currentLetterIndex < targetIndex) {
            // Cycle to next letter - speed based on loading progress
            const timer = setTimeout(() => {
                setCurrentLetter(alphabet[currentLetterIndex + 1])
            }, letterSpeed)
            
            return () => clearTimeout(timer)
        } else if (currentLetterIndex === targetIndex) {
            // Found the target letter, add it and move to next position
            const timer = setTimeout(() => {
                setCompletedLetters(prev => [...prev, targetChar])
                setCurrentIndex(prev => prev + 1)
                setCurrentLetter("A")
            }, letterSpeed * 0.5) // Half speed for the pause
            
            return () => clearTimeout(timer)
        }
    }, [currentIndex, currentLetter, targetText, loadingProgress])

    return (
        <div 
            id="loader"
            className={`fixed inset-0 flex justify-center items-center bg-[#0f2027] z-[9999] transition-opacity duration-[2000ms] ${isComplete ? 'loader-fade-out' : ''}`}
        >
            <h1 className={`text-4xl sm:text-8xl font-bold loader-text ${isComplete ? 'loader-complete' : ''}`}>
                {completedLetters.map((char, index) => (
                    <span key={index} className="loader-completed-letter">
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
                {currentIndex < targetText.length && (
                    <span className="loader-typing-container">
                        <span className="loader-letter-blur loader-letter-top">{getPreviousLetter(currentLetter)}</span>
                        <span className="loader-letter-center">{currentLetter}</span>
                        <span className="loader-letter-blur loader-letter-bottom">{getNextLetter(currentLetter)}</span>
                    </span>
                )}
            </h1>
        </div>
    )
}

export default Loader