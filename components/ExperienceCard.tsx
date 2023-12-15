import React from 'react'
import Image from 'next/image'
import fn_img from "../assets/fnm.jpeg"
import {motion} from "framer-motion";
import py_img from "../assets/python.jpeg";
import spark_img from "../assets/spark.jpg";
import torch_img from "../assets/torch.png";
import fire_img from "../assets/firestore.png";
import gcp_img from "../assets/gcp.png";
import flutter_img from "../assets/flutter.png";

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0
                        w-[500px] md:w-[600px] xl:w-[600px] snap-center bg-[#292929] p-10  xl:h-[700px] hover:opacity-100 opacity-40
                        cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.div
        initial={{
            x:-200,
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        transition={{duration:1.2}}
        viewport={{once:true}}
        >
            <Image src = {fn_img} alt = "fnm"
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"></Image>
        </motion.div>
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Analyst</h4>
            <p className="font-bold text-2xl mt-1">Fn Mathlogic</p>
            <div className="flex space-x-2 my-2">
                <Image className="h-10 w-10 rounded-full" src = {py_img} alt = "python"></Image>
                <Image className="h-10 w-10 rounded-full" src = {torch_img} alt = "pytorch"></Image>
                <Image className="h-10 w-10 rounded-full" src = {flutter_img} alt = "flutter"></Image>
                <Image className="h-10 w-10 rounded-full" src = {gcp_img} alt = "gcp"></Image>
                <Image className="h-10 w-10 rounded-full" src = {fire_img} alt = "firestore"></Image>
                <Image className="h-10 w-10 rounded-full" src = {spark_img} alt = "pyspark"></Image>
            </div>
            <p className="uppercase py-5 text-gray-300 ">From February 2022 to August 2023</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Explainable AI for Image Models</li>
                <li>Predictive Modeling for countries&apos; internet spend</li>
                <li>Developed a Full Stack Application for a hiring agency</li>
                <li>Maintained DevOps for the application on GCP</li>
                <li>Cloud Consulting for GCP</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard