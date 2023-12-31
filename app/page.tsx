import Header from "@/components/Header";
import Hero from "@/components/Hero";
import type { NextPage } from "next";
import Head from "next/head";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const Home:NextPage = () =>{
  return(
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Anirudh&apos;s Portfolio</title>
      </Head>

    {/* Header*/}
      <Header />

    {/* Hero */}
    <section id = "hero" className="snap-start">
      <Hero />
    </section>

    {/* About */}
    <section id = "about" className="snap-center">
      <About />
    </section>

    {/* Work Experience*/}
    <section id = "exp" className="snap-center">
      <Experience />
    </section>

    {/* Skills*/}
    <section id = "skills" className="snap-start">
      <Skills />
    </section>
    
    {/* Projects */}
    <section id = "projects" className="snap-start">
      <Projects />
    </section>
    
    </div>
  )
}

export default Home;