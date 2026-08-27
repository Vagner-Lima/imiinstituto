import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import WhatsAppButton from "../components/whatsapp";
import Laboratorios from "../components/laboratorios";
import Inmetro from "../components/inmetro";
import NR13 from "../components/nr13";
import Sobre from "../components/sobre";

export default function Home() {
  return (
    <>
      <section className="min-h-screen min-w-screen overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        >
          <source
            src="/imgs/banner4.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gray-950/90" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <Hero />
        </div>

      </section>

      <main>
        <Sobre/>
        <Laboratorios/>
        <NR13/>
        <Inmetro/>  
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}