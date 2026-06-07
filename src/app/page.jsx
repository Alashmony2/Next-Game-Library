import NavbarComponent from "@/components/Navbar/Navbar.jsx";
import Image from "next/image.js";


export default function Home() {
  return <>
    <section className="relative w-full h-60">
      {/* put navbar here */}
      <NavbarComponent/>
      <Image fill className="object-cover" src="/back.png" alt="background" priority />
      
    </section>
  </>
}
