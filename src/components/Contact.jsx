// src/components/Contact.jsx
import React from 'react';
import ScrollBtn from './ScrollBtn';
import mailIcon from '../assets/mail-dot-ru.svg';
import githubIcon from '../assets/github-logo.svg';
import linkedInIcon from '../assets/linked.svg';

function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen py-20 flex flex-col justify-center items-center px-4 text-center relative overflow-hidden"
        >
            <div className="relative z-10 w-full max-w-4xl">
                <h2 className="text-xl sm:text-2xl mb-2 fade-up bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent">
                    Resume & Contact
                </h2>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold fade-up delay-100">
                    Let's{' '}
                    <span className="text-[#00ffd9] drop-shadow-[0_0_15px_rgba(0,255,217,0.5)]">
                        Connect & Collaborate
                    </span>
                </h3>

                <a
                    href="/Chinmay_Koshe_CV.pdf"
                    download
                    className="mt-8 inline-flex items-center gap-2 text-[#00ffd9] border border-[#00ffd9] px-8 py-3 rounded-full hover:bg-[#00ffd9] hover:text-black transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 shadow-[0_0_18px_rgba(0,255,217,0.4)]"
                >
                    <span className="text-2xl">📄</span>
                    <span className="text-sm sm:text-base font-medium tracking-wide">
                        Download My Resume
                    </span>
                </a>

                <div className="mt-10 flex flex-col items-center space-y-6 fade-up delay-[300ms]">
                    <div className="flex items-center space-x-5 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=chinmaykoshe@gmail.com&su=Hello%20Chinmay&body=I%20visited%20your%20portfolio!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#00ffd9]/20 transition transform hover:-translate-y-1 hover:scale-110"
                        >
                            <img
                                src={mailIcon}
                                alt="Email"
                                className="w-5 h-5 filter brightness-0 invert"
                            />
                        </a>

                        <span className="text-gray-600">|</span>

                        <a
                            href="https://github.com/chinmaykoshe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#00ffd9]/20 transition transform hover:-translate-y-1 hover:scale-110"
                        >
                            <img
                                src={githubIcon}
                                alt="GitHub"
                                className="w-5 h-5 invert"
                            />
                        </a>

                        <span className="text-gray-600">|</span>

                        <a
                            href="https://www.linkedin.com/in/chinmay-koshe-b38793288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#00ffd9]/20 transition transform hover:-translate-y-1 hover:scale-110"
                        >
                            <img
                                src={linkedInIcon}
                                alt="LinkedIn"
                                className="w-5 h-5 invert"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <ScrollBtn target="#message" label='Send a message Directly ↓' />

        </section>
    );
}

export default Contact;
