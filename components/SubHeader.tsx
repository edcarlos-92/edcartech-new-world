/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function SubHeader() {
  return (
    <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
        
        <div className="px-10 space-y-5">
            <h1 className="text-6xl max-w-xl font-serif"><span className="underline decoration-black decoration-4">Ed-Blog</span> is a place to write read and connect</h1>
            <h2>
                It's easy and free to post your thinking on any topic and connect with millions of readers
            </h2>
        </div>
        <div>
        <img
        className="hidden md:inline-flex h-32 lg:h-full"
        src="/edcartech-logo.png" alt="" />
        </div>
 
       

    </div>
  )
}
