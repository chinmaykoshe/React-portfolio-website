import React from 'react'

function About() {
    return (
        <section id="Tech-Stack" className="min-h-screen py-20 flex flex-col justify-center items-center px-4 text-center">
            <h2 className="text-xl sm:text-2xl mb-2 fade-up">🧪 My Tech-Stack</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold fade-up delay-100">
                <span className="text-[#00ffd9] drop-shadow-md">Tools That Power My Builds</span>
            </h3>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full fade-up delay-200">
                <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition text-left">
                    <h4 className="text-[#00ffd9] text-xl font-bold mb-3">🛠 Languages & Tools</h4>
                    <ul className="text-gray-300 space-y-2 list-disc list-inside text-base sm:text-sm">
                        <li>JavaScript – scripting my ideas into life</li>
                        <li>Python – for clean logic and backend magic</li>
                        <li>Git – version control like a boss</li>
                        <li>Tailwind CSS – styling without the clutter</li>
                    </ul>
                </div>
                <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition text-left">
                    <h4 className="text-[#00ffd9] text-xl font-bold mb-3">⚙️ Frameworks & Databases</h4>
                    <ul className="text-gray-300 space-y-2 list-disc list-inside text-base sm:text-sm">
                        <li>React – composable UI wizardry</li>
                        <li>Node.js – powering server-side logic</li>
                        <li>MongoDB – schema-less freedom</li>
                        <li>SQL – structured data management and queries</li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 flex justify-center w-full">
                <a href="#portfolio"
                    className="inline-block text-[#00ffd9] border border-[#00ffd9] px-6 py-3 rounded-full hover:bg-[#00ffd9] hover:text-black transition-all duration-300 animate-bounce">
                    Next Up: Projects ↓
                </a>
            </div>
        </section>
    )
}

export default About