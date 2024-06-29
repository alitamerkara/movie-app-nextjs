"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'


const Tabs = () => {
  const searchParams= useSearchParams();
  const genre= searchParams.get("genre")
  const tabs= [
    {
      "name": "En Popüler",
      "url":"popular"
    },
    {
      "name": "En Son",
      "url":"latest"
    },
    {
      "name": "Yakında",
      "url":"upcoming"
    },

  ]

  return (
    <div className="p-5 m-3 bg-gray-300 dark:bg-gray-900 flex items-center justify-center gap-7 text-white">
      {
        tabs.map((item,i)=>(<Link className={`cursor-pointer hover:opacity-75 transition-opacity ${item.url===genre ? "underline underline-offset-8 text-amber-800 font-bold": null}`} key={i} href={`?genre=${item.url}`}>{item.name}</Link>))
      }
    </div>
  )
}

export default Tabs