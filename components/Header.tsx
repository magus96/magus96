"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Props } from "next/script";
import React from "react";
import { SocialIcon } from "react-social-icons";
export default function Header({  }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{ duration: 1 }}
        className=" flex flex-row items-center"
      >
        <SocialIcon url="https://github.com/magus96" fgColor="gray" bgColor="transparent" />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon className="cursor-pointer" network="email" fgColor="grey" bgColor="transparent" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">anirudh5462@gmail.com</p>
      </motion.div>
    </header>
  );
}
