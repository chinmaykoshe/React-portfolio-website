import React from "react";

function ScrollBtn({ target, label }) {
  const handleScrollToTab = (e) => {
    e.preventDefault();
    const section = document.querySelector(target); // e.g. "#portfolio"
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="nexttabbtn" className="mt-12 flex justify-center w-full">
      <button
        onClick={handleScrollToTab}
        className="inline-block text-[#00ffd9] border border-[#00ffd9] px-6 py-3 rounded-full hover:bg-[#00ffd9] hover:text-black transition-all duration-300 animate-bounce"
      >
        {label}
      </button>
    </div>
  );
}

export default ScrollBtn;