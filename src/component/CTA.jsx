export default function CTAButton({ 
  text = "Daftar Sekarang", 
  onClick,
  className = "" 
}) {
  return (
    <button
      onClick={onClick}
      className={`
        px-8 py-2
        rounded-lg
        font-semibold 
        transition-all 
        duration-300 
        shadow-lg 
        hover:scale-105 
        hover:cursor-pointer
        active:scale-95
        /* Your specific colors */
        bg-[#F5F5F0] 
        text-[#213C51] 
        hover:bg-[#213C51] 
        hover:text-[#F5F5F0]
        /* Allows you to add extra margin or custom classes later */
        ${className}
      `}
    >
      {text}
    </button>
  );
}

/*
<CTAButton text="Apply Now" /> -- NORMAL

      {/* Custom School Colors (e.g., Maroon/Gold) }
      <CTAButton 
        text="Visit Campus" 
        bgColor="bg-red-800" 
        textColor="text-yellow-400" 
        hoverColor="hover:bg-red-900"
      />

      {/* Outline Style (using the className prop for extra control) }
      <CTAButton 
        text="Contact Us" 
        bgColor="bg-transparent" 
        textColor="text-blue-600" 
        hoverColor="hover:bg-blue-50"
        className="border-2 border-blue-600 shadow-none"
      />
 */