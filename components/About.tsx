"use client";
import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import ab_img from "../assets/ab_img.jpg"
import { openAsBlob } from "fs";

type Props = {}

export default function About({}: Props){
    
    return(
        <motion.div
            initial ={{
                opacity:0
            }}
            whileInView={{opacity:1}}
            transition={{duration: 1.5}}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
            <motion.div
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}}            
            >
                <Image src={ab_img} alt="me" className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] xl:rounded-full"></Image>
            </motion.div>
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-3xl font-semibold">
                    Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> Background:
                </h4>
                <p className="text-base">
                    I&apos;m Anirudh, a music buff and a programmer. I&apos;ve been<br></br> programming for over 8 years now, primarily in Python<br></br>,C and Typescript.
                    Professionally, I have 2 years<br></br> of experience in the AI/ML and FullStack
                    domains<br></br> using Python. I am passionate about learning<br></br> whatever catches my intrigue and 
                    building something<br></br> cool with it. I am also proficient
                    in Rust and Golang<br></br> and have made some personal projects in the same.<br></br> I have a proven track record 
                    of delivering quality code<br></br> in the real world and I thrive
                    in solving unforeseen problems.<br></br> Throughout my journey, I have worked across vastly diverse<br></br> domains
                    leading to increased flexibility in adapting to the needs<br></br> 
                    of the situation at hand. 
                </p>
            </div>
        </motion.div>
    )
}