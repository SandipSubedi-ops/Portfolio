'use client'

import { ArrowRightIcon } from "@radix-ui/react-icons"
import ExperienceDetails from "../custom/experienceListing"

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative min-h-screen bg-gray-100 dark:bg-[#161D1F] py-14 px-6 lg:px-[5%] bg-baseBackground"
        >
            <div className="max-w-6xl mx-auto w-full flex flex-col items-center gap-10">
                {/* Title */}
                <div className="overflow-hidden text-center">
                    <h2 className="text-animation navlink dark:bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-black dark:text-transparent bg-clip-text leading-none text-4xl md:text-6xl font-semibold">
                        Experiences
                    </h2>
                </div>

                {/* Content */}
                <ExperienceDetails />
            </div>
        </section>
    )
}
