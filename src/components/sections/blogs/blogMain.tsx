"use client"

import React from 'react';
import CardFlip from '@/components/kokonutui/card-flip';
import CsharpInterviewBlog from './csharpInterview-blog';
import SqlBlog from './sql-blog';
import ReactBlog from './react-blog';

const BlogMain = () => {

    const cardClicked = (data:any) =>{
        console.log(1)
    }

    return (
        <section
            id="blogs"
            className="relative min-h-screen bg-gray-100 dark:bg-[#161D1F] py-14 px-6 lg:px-[5%] bg-baseBackground"
        >
            <div className="max-w-6xl mx-auto w-full flex flex-col items-center gap-10">
                {/* Title */}
                <div className="overflow-hidden text-center">
                    <h2 className="text-animation navlink dark:bg-[linear-gradient(#fff,rgba(255,255,255,.6))] inline-block text-black dark:text-transparent bg-clip-text leading-none text-4xl md:text-6xl font-semibold">
                        Blogs
                    </h2>
                </div>

                {/* Cards */}
                <div className="flex flex-wrap justify-center gap-6">
                    <CardFlip title='.NET' subtitle='.NET Interview Questions' description='Explore .NET questions' bottomTitle='Read More'  popupContent={<CsharpInterviewBlog />} />
                    <CardFlip title='React' subtitle='React Interview Questions' description='Explore React questions' bottomTitle='Read More' popupContent={<ReactBlog />} />
                    <CardFlip title='SQL' subtitle='SQL Interview Questions' description='Explore SQL questions' bottomTitle='Read More' popupContent={<SqlBlog />} />
                </div>
            </div>
        </section>
    );
}

export default BlogMain;
