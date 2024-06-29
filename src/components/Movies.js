"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Movies = ({item}) => {
const [mouseOver, setMouseOver]= useState(false)
const router= useRouter()

  return (
    <div onMouseOver={()=>{setMouseOver(true)}} onMouseOut={()=>{setMouseOver(false)}} onClick={()=>router.push(`/movie/${item?.id}`)} className='min-w-[450px] relative cursor-poiner opacity-100 hover:opacity-80 transition-opacity'>
        <Image className='cursor-pointer' width={450} height={300} src={`
https://image.tmdb.org/t/p/original/${item?.backdrop_path}`}/>
<div className='absolute bottom-0 p-3'>
{mouseOver? <>
    <div className='text-2xl font-bold'>{item.title}</div>
<div>{item?.release_date} - {item?.vote_average}</div>
</>:null}
</div>
    </div>
  )
}

export default Movies