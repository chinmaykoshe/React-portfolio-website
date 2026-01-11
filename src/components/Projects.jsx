// src/components/Projects.jsx

import { useState } from 'react';
import projects from '../assets/projectsdata';

function Projects() {
    const [modalData, setModalData] = useState(null);

    const internshipProjects = projects.filter(
        (p) => p.category === 'internship'
    );
    const minorProjects = projects.filter((p) => p.category === 'minor');
    const miniProjects = projects.filter((p) => p.category === 'mini');

    const openModal = (project) => {
        setModalData(project);
    };

    const closeModal = () => {
        setModalData(null);
    };

    return (
        <>
            <section
                id="portfolio"
                className="min-h-screen lg:px-20 md:px-12 px-4 py-20 relative"
            >
                <h2 className="text-xl sm:text-2xl text-center mb-2 fade-up">
                    Projects
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center fade-up delay-100">
                    <span className="text-[#00ffd9] drop-shadow-md">Visual Showcase</span>{' '}
                    of My Work
                </h3>

                {/* INTERNSHIP PROJECTS */}
                {internshipProjects.length > 0 && (
                    <>
                        <h4 className="mt-10 mb-4 text-lg font-semibold text-[#00ffd9]">
                            Internship Project
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up delay-200">
                            {internshipProjects.map((project, index) => (
                                <div
                                    key={`${project.title}-${index}`}
                                    onClick={() => openModal(project)}
                                    className="project-card block bg-white/10 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(0,0,0,0.8)] transition-all cursor-pointer border border-white/10"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 text-left">
                                        <h4 className="text-[#00ffd9] text-xl font-semibold mb-1">
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-300 text-base sm:text-sm">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* DIVIDER */}
                <div className="relative mt-16 mb-16 w-full flex justify-center">
                    <hr className="w-4/5 border-t-2 border-[#00ffd9]" />
                </div>

                {/* MINOR PROJECTS */}
                {minorProjects.length > 0 && (
                    <>
                        <h4 className="mb-4 text-lg font-semibold text-[#00ffd9]">
                            Minor Projects
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up delay-200">
                            {minorProjects.map((project, index) => (
                                <div
                                    key={`${project.title}-${index}`}
                                    onClick={() => openModal(project)}
                                    className="project-card block bg-white/10 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(0,0,0,0.8)] transition-all cursor-pointer border border-white/10"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 text-left">
                                        <h4 className="text-[#00ffd9] text-xl font-semibold mb-1">
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-300 text-base sm:text-sm">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* DIVIDER */}
                <div className="relative mt-16 mb-16 w-full flex justify-center">
                    <hr className="w-4/5 border-t-2 border-[#00ffd9]" />
                </div>

                {/* MINI PROJECTS */}
                {miniProjects.length > 0 && (
                    <>
                        <h4 className="mt-12 mb-4 text-lg font-semibold text-[#00ffd9]">
                            Mini Projects
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up delay-200">
                            {miniProjects.map((project, index) => (
                                <div
                                    key={`${project.title}-${index}`}
                                    onClick={() => openModal(project)}
                                    className="project-card block bg-white/10 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(0,0,0,0.8)] transition-all cursor-pointer border border-white/10"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 text-left">
                                        <h4 className="text-[#00ffd9] text-xl font-semibold mb-1">
                                            {project.title}
                                        </h4>
                                        <p className="text-gray-300 text-base sm:text-sm">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                <div className="mt-12 flex justify-center w-full">
                    <a
                        href="#contact"
                        className="inline-block text-[#00ffd9] border border-[#00ffd9] px-6 py-3 rounded-full hover:bg-[#00ffd9] hover:text-black transition-all duration-300 animate-bounce"
                    >
                        More Projects Coming Soon ↓
                    </a>
                </div>
            </section>

            {/* PROJECT MODAL */}
            {modalData && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-[#111827] rounded-xl w-full max-w-7xl mx-4 overflow-hidden flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="md:w-2/3 w-full bg-black/60 flex items-center justify-center">
                            <img
                                src={modalData.image}
                                alt={modalData.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="p-6 md:w-1/2 w-full text-gray-300 relative">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 text-[#00ffd9] text-2xl flex items-center justify-center hover:text-white hover:bg-white/30 transition"
                                aria-label="Close"
                            >
                                &times;
                            </button>
                            <h3 className="text-[#00ffd9] text-3xl font-bold mb-4">
                                {modalData.title}
                            </h3>
                            <p className="mb-4">{modalData.description}</p>
                            <ul className="list-disc list-inside mb-4 space-y-1">
                                {modalData.features.split(',').map((feature, idx) => (
                                    <li key={idx}>{feature.trim()}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-4">
                                {modalData.live && (
                                    <a
                                        href={modalData.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#00ffd9] text-[#00ffd9] hover:bg-[#00ffd9] hover:text-black transition"
                                    >
                                        <img
                                            src="/images/live.png"
                                            alt="Visit Live"
                                            className="h-5 w-5 invert"
                                        />
                                        <span>View Live</span>
                                    </a>
                                )}
                                {modalData.github && (
                                    <a
                                        href={modalData.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#00ffd9] text-[#00ffd9] hover:bg-[#00ffd9] hover:text-black transition"
                                    >
                                        <img
                                            src="/images/github-logo.svg"
                                            alt="GitHub"
                                            className="h-5 w-5 invert"
                                        />
                                        <span>View GitHub</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Projects;
