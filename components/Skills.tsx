import React from 'react'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <div className="h-screen flex relative text-center flex-col md:text-left xl:flex-row max-w-[2000px] xl:px-10
                    min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Skills
        </h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
            Hover over a skill for current proficiency
        </h3>
        <div>
            <Skill />
        </div>
    </div>
  )
}

export default Skills