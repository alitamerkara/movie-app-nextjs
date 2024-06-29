"use client"
import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import MenuItem from './MenuItem';
import { MdModeNight,MdWbSunny } from "react-icons/md";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Header = ({theme,setTheme}) => {
const [keyword, setKeyword]= useState("")
const router= useRouter();
const searchMovie= (e)=>{
if(e.key== "Enter"){
    router.push(`/search/${keyword}`)
}
}
    const menu= [
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Sign In",
            path: "/login"
        }
    ]
  return (
    <div className="flex p-5 gap-7">
        <div className="text-2xl font-bold bg-amber-600 rounded-lg p-3"><Link href='/'>MovieApp</Link></div>
        <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
            <input onChange={(e)=>{setKeyword(e.target.value)}}  onKeyDown={searchMovie} placeholder="Arama yapınız..." className="outline-none flex-1 bg-transparent"/>
            <FaSearch size={25}/>
        </div>
        <button onClick={()=>{setTheme(theme=> !theme)}}>{theme? <MdWbSunny size={25}/> : <MdModeNight size={25}/> }</button>
        {menu.map((item ,index)=>(<MenuItem key={index} mn={item}/>))}     
    </div>
  )
}

export default Header