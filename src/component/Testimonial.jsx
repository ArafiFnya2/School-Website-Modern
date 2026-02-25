"use client"; 
import { useState, useRef } from "react";

const testimonials = [
  {
    id: 1,
    text: "“Sejak bergabung dengan Veritas International School, saya melihat perubahan luar biasa pada kepercayaan diri anak saya. Kurikulumnya tidak hanya fokus pada akademik, tapi benar-benar mengasah critical thinking dan karakter.”",
    name: "Muhammad Arifin Supratman",
    role: "Wali Murid Angkatan 2",
    image: "/Profile.png",
  },
  {
    id: 2,
    text: "“Sistem pembelajarannya sangat terstruktur. Saya terkesan dengan bagaimana guru-guru di Veritas memberikan perhatian khusus pada perkembangan bakat unik setiap anak.”",
    name: "Siti Aminah",
    role: "Wali Murid Angkatan 5",
    image: "/Profile.png",
  },
  {
    id: 3,
    text: "“Lingkungan sekolah yang sangat mendukung dan inklusif. Anak saya sekarang jauh lebih berani berpendapat dan memiliki rasa solidaritas yang tinggi terhadap teman-temannya.”",
    name: "Budi Santoso",
    role: "Wali Murid Angkatan 1",
    image: "/Profile.png",
  },
  {
    id: 4,
    text: "“Investasi terbaik untuk masa depan. Kualitas pengajaran internasional namun tetap menjunjung tinggi nilai-nilai etika dan karakter yang kuat.”",
    name: "Aji Panji",
    role: "Wali Murid Angkatan 3",
    image: "/Profile.png",
  },  
  {
    id: 5,
    text: "“Fasilitas sekolah sangat memadai dan modern. Anak-anak merasa nyaman dan selalu antusias untuk berangkat ke sekolah setiap harinya.”",
    name: "Mario Fario",
    role: "Wali Murid Angkatan 4",
    image: "/Profile.png",
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const handleTransition = (newIndex) => {
    if (isAnimating) return; 
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 200); 
  };

  const nextTestimonial = () => {
    handleTransition((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    handleTransition((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isSignificant = Math.abs(distance) > 50; 

    if (isSignificant) {
      if (distance > 0) nextTestimonial();
      else prevTestimonial();
    }
    
    touchStart.current = 0;
    touchEnd.current = 0;
  };

  return (
    <section className="w-full bg-[#F5F5F0] py-24 px-6 md:px-20 lg:px-32 select-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="flex flex-col text-[#213C51] text-center mb-16">
          <h2 className="text-xl font-poppins mb-1 opacity-80">TESTIMONIALS</h2>
          <h1 className="text-4xl md:text-5xl font-merri font-bold">
            Apa yang dikatakan Wali Murid?
          </h1>
        </div>

        <div 
          className="relative flex flex-row items-center justify-center w-full touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button 
            onClick={prevTestimonial}
            className="hidden lg:flex absolute -left-20 xl:-left-40 items-center justify-center w-14 h-14 rounded-full border border-[#213C51] text-[#213C51] hover:bg-[#213C51] hover:text-white transition-all active:scale-90 hover:cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div className={`flex flex-col items-center max-w-3xl text-center transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <img key={i} src="/stars.svg" className="w-8 h-8" alt="rating icon" />
              ))}
            </div>

            <p className="text-[#213C51] font-poppins text-lg md:text-xl leading-relaxed mb-10 italic min-h-35 md:min-h-30">
              {testimonials[currentIndex].text}
            </p>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#BFC9D1]">
                <img src={testimonials[currentIndex].image} alt="Profile" className="w-full h-full object-contain bg-white" />
              </div>
              <h4 className="text-[#213C51] font-bold font-merri text-xl">{testimonials[currentIndex].name}</h4>
              <p className="text-[#213C51] opacity-70 text-sm font-poppins mt-1">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <button 
            onClick={nextTestimonial}
            className="hidden lg:flex absolute -right-20 xl:-right-40 items-center justify-center w-14 h-14 rounded-full border border-[#213C51] text-[#213C51] hover:bg-[#213C51] hover:text-white transition-all active:scale-90 hover:cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

       <div className="flex gap-3 mt-14 flex-row items-center justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTransition(index)}
              className={`rounded-full transition-all duration-300 hover:cursor-pointer ${
                currentIndex === index 
                ? "h-5 w-5 bg-[#213C51] ring-4 ring-[#213C51]" 
                : "h-4 w-4 bg-[#BFC9D1]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}