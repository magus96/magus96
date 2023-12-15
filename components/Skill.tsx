"use client";
import React from 'react'
import {motion} from "framer-motion";
import Image from 'next/image';
import py_img from "../assets/python.jpeg";
import js_img from "../assets/javascript.png";
import sol_img from "../assets/solidity.png";
import tf_img from "../assets/tensorflow.png";
import torch_img from "../assets/torch.png";
import spark_img from "../assets/spark.jpg";
import rust_img from "../assets/rust.jpeg";
import go_img from "../assets/golang.png";
import flutter_img from "../assets/flutter.png";
import gcp_img from "../assets/gcp.png";
import react_img from "../assets/react.png";
import next_img from "../assets/next.png";

type Props = {
    directionLeft?: boolean;
}

function Skill({directionLeft}: Props) {
  return (
    <motion.div 
    initial={{
        x: directionLeft? -200:200,
        opacity: 0
    }}
    transition={{duration:1}}
    whileInView={{
        opacity:1,
        x:0
    }}
    className="group relative flex cursor-pointer grid grid-cols-4 gap-5">    
        <Image src = {py_img} alt = "python" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter
                                                            transition duration-300 ease-in-out"></Image>
        <Image src = {js_img} alt = "javascript" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter
                                                            transition duration-300 ease-in-out"></Image>
        <Image src = {rust_img} alt = "rust" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter
                                                            transition duration-300 ease-in-out"></Image>
        <Image src = {go_img} alt = "golang" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter
                                                            transition duration-300 ease-in-out"></Image>                                                   
        <Image src = {sol_img} alt = "solidity" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter
                                                            transition duration-300 ease-in-out"></Image>
        <Image src = {flutter_img} alt = "flutter" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter
                                                            transition duration-300 ease-in-out"></Image>
        <Image src = {react_img} alt = "react" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter
                                                            transition duration-300 ease-in-out"></Image>
        <Image src = {next_img} alt = "next" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter
                                                            transition duration-300 ease-in-out"></Image>
        <Image src = {tf_img} alt = "tensorflow" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter
                                                            transition duration-300 ease-in-out"></Image>
        <Image src = {torch_img} alt = "pytorch" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter
                                                            transition duration-300 ease-in-out"></Image>
        <Image src = {spark_img} alt = "pyspark" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter
                                                            transition duration-300 ease-in-out"></Image>
        <Image src = {gcp_img} alt = "gcp" className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter
                                                            transition duration-300 ease-in-out"></Image>
    </motion.div>
  )
}

export default Skill