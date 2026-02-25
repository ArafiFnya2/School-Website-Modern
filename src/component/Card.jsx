import React from "react";

export default function ProgramCard({ 
  image = "/english-program.png", 
  category = "LANGUAGE", 
  title = "English Mastery", 
  description = "A comprehensive immersion program designed to develop native-level fluency through literature, debate, and creative writing.",
  buttonText = "Apply Now" 
}) {
  return (
    <div className="group w-94.75 h-148.25 bg-white border border-[#213C51]/10 flex flex-col relative overflow-hidden transition-all duration-500 hover:border-[#213C51]">
      <div className="h-70 w-full relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-120 h-full object-cover brightness-76"
        />
      </div>

      <div className="flex-1 p-8 flex flex-col justify-between">
        <div>
          <span className="text-[12px] font-poppins tracking-[0.2em] text-[#213C51]/50 uppercase mb-3 block">
            {category}
          </span>
          <h3 className="text-[#213C51] font-merri text-3xl font-bold leading-tight mb-4">
            {title}
          </h3>
          <div className="w-12 h-0.5 bg-[#BFC9D1] mb-6 transition-all duration-500 group-hover:w-full group-hover:bg-[#213C51]" />
          <p className="text-[#213C51]/70 font-poppins text-sm leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>
        <div className="relative overflow-hidden group/btn">
          <button className="w-full py-4 bg-transparent border border-[#213C51] text-[#213C51] font-poppins font-semibold uppercase tracking-widest text-xs transition-all duration-300 group-hover:bg-[#213C51] group-hover:text-white flex items-center justify-center gap-2 hover:cursor-pointer">
            {buttonText}
            <svg 
              className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#213C51] transition-all duration-500 group-hover:w-full" />
    </div>
  );
}