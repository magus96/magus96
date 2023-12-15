import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import wp_img from "../assets/way2pay.png";
import gof_img from "../assets/game.jpeg";
import grad_img from "../assets/micrograd.png";
import mb_img from "../assets/mandelbrot.jpeg";

type Props = {}

function Project({}: Props) {
  return (
    <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <Image src = {wp_img} alt = "way2pay" className="w-80 h-98"></Image>
        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
                Project 1 of 4. <Link href="https://github.com/magus96/Front" className="underline decoration-blue-700 hover:text-blue-700">Way2Pay</Link>
            </h4>
            <p>
                Non Custodial, cross-chain cryptocurrency payment checkout service built<br></br>
                at EthOnline 2023. A team of four built it leveraging React, Next.Js and Solidity.<br></br>
                The project won the sponsor prize by Connext for Best Cross Chain Abstracted UX. I personally<br></br>
                worked on both the frontend and the Smart Contracts for this project.
            </p>
        </div>
    </div>
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <Image src = {gof_img} alt = "game of life" className="w-80 h-98"></Image>
        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
                Project 2 of 4. <Link href="https://github.com/magus96/game-of-life" className="underline decoration-blue-700 hover:text-blue-700">Conway's Game of Life</Link>
            </h4>
            <p>
                Python program to simulate the famous Conway's Game of Life <br></br>
                using PyGame library. Involved significant learning curve of<br></br>
                understanding computer graphics, plotting mathematical concepts<br></br>
                onto the screen and basic game design and UI/UX.
            </p>
        </div>
    </div>
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <Image src = {grad_img} alt = "Micrograd" className="w-80 h-98"></Image>
        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
                Project 3 of 4. <Link href="https://github.com/magus96/grad_tutorial" className="underline decoration-blue-700 hover:text-blue-700">Micrograd</Link>
            </h4>
            <p>
                Wrote a basic automatic differentiation engine in python which can<br></br>
                train real life neural nets and give good results from scratch. In<br></br>
                addition to training the neural network, support for creating the <br></br>
                neural network was also provided to visualise how the forward and <br></br>
                backward passes work in backpropagation.
            </p>
        </div>
    </div>
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
        <Image src = {mb_img} alt = "Mandelbrot" className="w-80 h-98"></Image>
        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
                Project 4 of 4. <Link href="https://github.com/magus96/rust-mandelbrot" className="underline decoration-blue-700 hover:text-blue-700">Mandelbrot in Rust</Link>
            </h4>
            <p>
               Wrote a Rust Program to render images of Mandelbrot sets using both<br></br>
               the CPU and the GPU. Used OpenCL kernel shaders to vastly speed up <br></br>
               the process of rendering as it utilises the GPU. This involved a significant<br></br>
               learning curve both in writing the program and setting up OpenCL on Linux.
            </p>
        </div>
    </div>
    </div>
  )
}

export default Project