import React from 'react'
import ScrollBtn from './ScrollBtn'

function About() {
    const handleScrollToPortfolio = (e) => {
        e.preventDefault()
        const section = document.querySelector('#portfolio')
        section?.scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <section
            id="Tech-Stack"
            className="min-h-screen py-20 flex flex-col justify-center items-center px-4 text-center"
        >
            <h2 className="text-xl sm:text-2xl mb-2 fade-up">🧪 My Tech-Stack</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold fade-up delay-100">
                <span className="text-[#00ffd9] drop-shadow-md">
                    Tools That Power My Builds
                </span>
            </h3>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full fade-up delay-200">
                {/* Languages & Tools */}
                <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition text-left">
                    <h4 className="text-[#00ffd9] text-xl font-bold mb-3">
                        🛠 Languages & Tools
                    </h4>
                    <ul className="text-gray-300 space-y-2 list-disc list-inside text-base sm:text-sm">
                        <li>JavaScript – primary language for my web projects</li>
                        <li>Python – familiar with core concepts, basics used in practice</li>
                        <li>Java – understanding of core Java fundamentals</li>
                        <li>HTML & CSS – structure and styling for responsive UIs</li>
                        <li>Git & GitHub – version control and collaboration</li>
                        <li>Postman & JSON – testing and working with REST APIs</li>
                    </ul>
                </div>

                {/* Frameworks & Databases */}
                <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition text-left">
                    <h4 className="text-[#00ffd9] text-xl font-bold mb-3">
                        ⚙️ Frameworks & Databases
                    </h4>
                    <ul className="text-gray-300 space-y-2 list-disc list-inside text-base sm:text-sm">
                        <li>React.js – building interactive, component-based frontends</li>
                        <li>Node.js & Express.js – backend APIs and server-side logic</li>
                        <li>Tailwind CSS – fast, utility-first styling</li>
                        <li>MongoDB – document-based data storage</li>
                        <li>MySQL – relational database and SQL queries</li>
                        <li>REST APIs – CRUD operations and integrations in projects</li>
                    </ul>
                </div>
            </div>
            <ScrollBtn target="#portfolio" label='Next Up: Projects ↓' />
        </section>
    )
}

export default About