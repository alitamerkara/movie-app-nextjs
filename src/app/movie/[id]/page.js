import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


const getMovie= async (id)=>{
const res= await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e03e9ce72ddf6d14214f80c3130d0b6f&language=en-US&page=1`);
const data= res.json();
return data;
}

const Page = async ({params}) => {
    const id= params.id
    const value= await getMovie(id)
    console.log(value, "value")
  return (
    <div className='relative p-7 min-h-screen'>
        <Image style={{objectFit:'cover'}} fill src={`
https://image.tmdb.org/t/p/original/${value?.backdrop_path}`} className=' opacity-80'/>
<div className='absolute'>
<div className='text-4xl font-bold my-2'>{value?.title}</div>
<div className='text-l w-1/2 my-2'>{value?.overview}</div>
<div className='text-m my-2'>Released {value?.release_date} - Point:  {value?.vote_average}</div>
<div className='cursor-pointer w-20 border py-2 flex items-center justify-center text-xl hover:bg-white hover:text-black transition-hover '><Link href={value?.homepage}>Trail</Link></div>
</div>
    </div>
  )
}

export default Page