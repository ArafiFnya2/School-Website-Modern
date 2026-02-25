import Image from "next/image";
import CTAButton from "@/component/CTA";
import Navbar from "@/component/Navbar";
import Testimonial from "@/component/Testimonial";
import ProgramCard from "@/component/Card";
import Registration from "@/component/Form";

export default function Home() {
  return (
    <main className="w-full">
      <section className="relative h-screen w-full overflow-hidden flex flex-col">
        <Navbar />
        <Image
          src="/bg.png"
          alt="Background"
          fill
          priority
          className="object-cover -z-10 opacity-45"
        />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4">
          <img src="/Logo.png" className="w-90 -mt-20 mb-1" alt="School Logo" />
          <div className="space-y-4 mb-8">
            <h1 className="text-2xl md:text-4xl font-merri text-white text-center leading-tight">
              PPDB Tahun Ajaran <br /> 2026/2027 Telah Dibuka
            </h1>
            <h3 className="text-sm font-poppins text-white text-center opacity-90">
              Proses pendaftaran online cepat, mudah, dan{" "}
              <br className="hidden md:block" /> transparan.
            </h3>
          </div>

          <div className="flex flex-row gap-5 font-poppins justify-center items-center">
            <CTAButton text="Daftar Sekarang" className="shadow-none" />
            <CTAButton text="Hubungi WA" className="shadow-none" />
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="bg-[#F5F5F0] flex flex-col lg:flex-row items-stretch overflow-hidden w-full">
          <div className="lg:w-1/2 py-20 px-6 md:pl-20 lg:pl-12 pr-6 lg:pr-12">
            <h2 className="text-[#213C51] text-xl font-poppins mb-1 opacity-80">
              TENTANG KAMI
            </h2>
            <h1 className="text-[#213C51] font-merri text-4xl font-bold mb-6">
              Veritas International School
            </h1>
            <p className="text-[#213C51] font-poppins leading-relaxed opacity-80">
              Veritas International School adalah sekolah pilihan terbaik untuk
              anak. Kami mengedepankan Dignity dalam setiap interaksi, membekali
              siswa dengan Knowledge melalui pembelajaran berkualitas, dan
              memupuk Solidarity untuk membentuk generasi yang siap
              berkontribusi positif bagi masyarakat.
            </p>
          </div>
          <div className="lg:flex-1 relative min-h-100">
            <img
              src="/About.png"
              alt="About Veritas"
              className="absolute inset-0 w-full h-full "
            />
          </div>
        </div>
        <div className="bg-[#BFC9D1] py-20 px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#F5F5F0] rounded-full flex items-center justify-center mb-6 border border-[#213C51]/20">
                <img src="/Kurikulum.svg" className="w-12 h-12" alt="Icon" />
              </div>
              <h3 className="text-[#213C51] font-merri text-xl font-bold mb-3">
                Kurikulum Terarah
              </h3>
              <p className="text-[#213C51]/80 text-sm font-poppins leading-relaxed">
                Melalui Kurikulum Terarah, setiap materi pelajaran disusun
                secara presisi untuk membentuk kompetensi nyata.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#F5F5F0] rounded-full flex items-center justify-center mb-6 border border-[#213C51]/20">
                <img src="Prestasi.svg" className="w-12 h-12" alt="Icon" />
              </div>
              <h3 className="text-[#213C51] font-merri text-xl font-bold mb-3">
                Murid Berprestasi
              </h3>
              <p className="text-[#213C51]/80 text-sm fo nt-poppins leading-relaxed">
                Melalui bimbingan kurikulum yang terarah, potensi setiap anak
                dipetakan, diasah, dan diantarkan menuju gerbang pencapaian
                tertinggi.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-[#F5F5F0] rounded-full flex items-center justify-center mb-6 border border-[#213C51]/20">
                <img src="/Kepercayaan.svg" className="w-12 h-12" alt="Icon" />
              </div>
              <h3 className="text-[#213C51] font-merri text-xl font-bold mb-3">
                Sekolah Terpercaya
              </h3>
              <p className="text-[#213C51]/80 text-sm font-poppins leading-relaxed">
                Jangan biarkan masa depan anak Anda menjadi spekulasi.
                Bergabunglah dengan institusi yang memiliki peta jalan jelas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#F5F5F0] md:px-20 lg:px-32"></section>
      <section className="w-full bg-[#F5F5F0] md:px-20 lg:px-32">
        <Testimonial />
      </section>
      <section className="w-full bg-[#F5F5F0] py-24 px-6 md:px-20">
  <div className="max-w-7xl mx-auto">
    <div className="mb-16 text-center">
     <h2 className="text-[#213C51] text-xl font-poppins mb-1 opacity-80">PROGRAMS</h2>
          <h1 className="text-[#213C51] text-4xl md:text-5xl font-merri font-bold">
            Pilih Program Jenjang Pendidikan
          </h1>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      <ProgramCard 
        category="SD"
        title="Penanaman Nilai"
        description="Pembiasaan adab harian, kejujuran, dan empati melalui proyek sosial kecil."
        image="./sd.jpg"
      />
      <ProgramCard 
        category="SMP"
        title="Penemuan Jati Diri"
        description="Latihan dasar kepemimpinan, manajemen organisasi, proyek kolaboratif antar kelas, dan pengenalan berbagai minat bakat."
        image="./smp.jpg"
      />
      <ProgramCard 
        category="SMA"
        title="STEM Excellence"
        description="Membangun inovator masa depan melalui robotika praktis, pemrograman, dan matematika tingkat lanjut."
        image="./sma.jpg"
      />
    </div>
  </div>
</section>
 <section className="w-full bg-[#F5F5F0] py-24 px-6 md:px-20">
  <div className="max-w-7xl mx-auto">
    <div className="mb-16 text-center">
     <h2 className="text-[#213C51] text-xl font-poppins mb-1 opacity-80">DAFTAR</h2>
          <h1 className="text-[#213C51] text-4xl md:text-5xl font-merri font-bold">
            Cara Mendaftarkan Anakmu
          </h1>
    </div>
    </div>
    <Registration/>
    </section>
      <footer className="w-full flex flex-col">
      <div className="bg-[#BFC9D1] py-12 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-[#213C51] font-merri text-3xl md:text-4xl font-bold max-w-lg leading-tight">
            Bergabung dengan Veritas International School
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-[#F5F5F0] text-[#213C51] font-poppins font-medium py-4 px-8 rounded-xl text-lg hover:opacity-90 transition-all cursor-pointer">
              Daftar Sekarang
            </button>
            <button className="bg-[#213C51] text-white font-poppins font-medium py-4 px-8 rounded-xl text-lg hover:opacity-90 transition-all cursor-pointer">
              Hubungi WA
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#213C51] text-white pt-20 pb-10 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="flex justify-center">
            <div className="w-48 h-48 md:w-70 md:h-70">
              <img 
                src="/Logo.png" 
                alt="Veritas Seal" 
                className="w-full h-full object-contain brightness-0 invert" 
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-merri text-2xl font-bold mb-6">Pages</h4>
            <ul className="flex flex-col gap-4 font-poppins opacity-80 text-lg">
              <li className="hover:opacity-100 cursor-pointer"><a href="#home">Home</a></li>
              <li className="hover:opacity-100 cursor-pointer"><a href="#about">About</a></li>
              <li className="hover:opacity-100 cursor-pointer"><a href="#programs">Programs</a></li>
              <li className="hover:opacity-100 cursor-pointer"><a href="#testimonial">Testimonial</a></li>
              <li className="hover:opacity-100 cursor-pointer"><a href="#steps">Steps</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-merri text-2xl font-bold mb-6">Contacts</h4>
            <ul className="flex flex-col gap-4 font-poppins opacity-80 text-lg">
              <li className="hover:opacity-100 cursor-pointer">Email</li>
              <li className="hover:opacity-100 cursor-pointer">Whats App</li>
              <li className="hover:opacity-100 cursor-pointer">Instagram</li>
              <li className="hover:opacity-100 cursor-pointer">Facebook</li>
              <li className="hover:opacity-100 cursor-pointer">TikTok</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-merri text-2xl font-bold mb-6">Address</h4>
            <p className="font-poppins opacity-80 text-lg leading-relaxed">
              J27H+H5Q, Cikarageman, Setu,<br />
              Bekasi Regency, West Java 17320
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/20 text-center">
          <p className="font-poppins text-sm opacity-60">
            © 2026 Veritas International School. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
    </main>
  );
}
