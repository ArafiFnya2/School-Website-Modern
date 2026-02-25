"use client";
import { useState } from "react";

const registrationSteps = [
  {
    id: 1,
    title: "Pengisian Formulir Pendaftaran",
    desc: "Orang tua atau wali murid wajib mengisi formulir pendaftaran resmi yang disediakan oleh sekolah, baik secara online melalui situs resmi sekolah maupun datang langsung ke bagian administrasi.",
  },
  {
    id: 2,
    title: "Penyerahan Dokumen Administrasi",
    desc: "Melampirkan dokumen pendukung seperti Akta Kelahiran, Kartu Keluarga, dan pas foto. Pihak tata usaha akan memvalidasi keaslian dokumen sebagai syarat wajib penerimaan siswa baru.",
  },
  {
    id: 3,
    title: "Pemetaan Kemampuan & Observasi",
    desc: "Pihak sekolah akan melakukan sesi observasi atau tes pemetaan untuk mengenal karakter, minat, dan kesiapan akademik calon siswa. Langkah ini bertujuan agar sekolah dapat memberikan pelayanan pendidikan yang tepat sesuai kebutuhan anak, bukan semata-mata sebagai penentu kelulusan.",
  },
  {
    id: 4,
    title: "Menunggu Pengumuman Penerimaan",
    desc: "Langkah terakhir adalah menunggu hasil seleksi atau verifikasi dari tim penerimaan siswa baru. Pengumuman akan disampaikan melalui email atau portal resmi sekolah secara transparan.",
  },
];

export default function Registration() {
  const [openIndex, setOpenIndex] = useState(2);

  const toggleStep = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F5F5F0] py-24 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col">
          {registrationSteps.map((step, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={step.id} 
                onClick={() => toggleStep(index)}
                className="flex items-start gap-5 md:gap-8 border-b-2 border-[#BFC9D1]/50 py-6 md:py-8 cursor-pointer group transition-all"
              >
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-[1.5px] border-[#213C51] bg-[#DFE5E9] flex items-center justify-center text-[#213C51] text-xl md:text-2xl font-poppins font-medium mt-1">
                  {step.id}
                </div>

                <div className="flex-1 pr-4">
                  <h3 className="text-[#213C51] text-xl md:text-[26px] font-poppins mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  
                  <p className={`text-[#213C51] opacity-70 font-poppins text-sm md:text-base leading-relaxed transition-all duration-300 ${isOpen ? '' : 'line-clamp-1'}`}>
                    {step.desc}
                  </p>
                </div>

                <div className="shrink-0 mt-2 text-[#213C51]">
                  {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}