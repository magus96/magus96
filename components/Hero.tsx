"use client";
import React from "react";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import Circles from "./Circles";
import self_img from "../assets/self_img.jpg"; 
import Image from "next/image";
import Link from "next/link";

type Props = {}

export default function Hero({}: Props){
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Anirudh Sharma",
            "Part time music buff",
            "Full time programmer"
        ],
        loop: true,
        delaySpeed: 800,
        typeSpeed: 70
    });

    return(
        <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center">
            <Circles />
            <Image src = {self_img} alt = "Tis Me" className="relative rounded-full h-32 w-32 mx-auto object-cover"></Image>
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
                <h1>
                    <span className="text-3xl lg:text-4xl font-semibold scroll-px-10">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="pt-5 ">
                    <Link href = "#about">
                    <button className="heroButton">About</button>
                    </Link>
                    <Link href = "#exp">
                    <button className="heroButton">Work Experience</button>
                    </Link>
                    <Link href = "#skills">
                    <button className="heroButton">Skills</button>
                    </Link>
                    <Link href = "#projects">
                    <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>   
        </div>
    )
}