import { Geist, Geist_Mono, Merriweather, Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-Poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})


const Merri_weather = Merriweather({
  variable: "--font-Merriweather",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Veritas International School",
  description: "International School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Merri_weather.variable} ${poppins.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
