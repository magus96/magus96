import React from "react";
import {motion} from "framer-motion";

type Props = {}

export default function Circles({}: Props){

    return(
        <motion.div 
            initial ={{
                z: -20,
                opacity: 0
            }}
            animate = {{
                z: [-10, 0],
                opacity: [0.1, 0.2, 0.3, 0.6, 1],
                scale: [1, 2, 3, 2, 1],
                borderRadius: ["10%", "15%", "50%", "20%", "10%"]
            }}
            transition={{duration: 2.5}}
            className="relative flex justify-center items-center">
            <div className="border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 absolute animate-pulse"/>
            <div className="border border-[#444444] rounded-full h-[300px] w-[300px] mt-52 absolute animate-ping"/>
            <div className="border border-[#F7AB0A] rounded-full h-[650px] w-[650px] mt-52 absolute animate-pulse"/>
        </motion.div>
    );
}