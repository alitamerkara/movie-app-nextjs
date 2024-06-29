
import Movies from '@/components/Movies'
import Tabs from '@/components/Tabs'
import React from 'react'

const Page = async ({searchParams}) => {
  const data= await fetch(`https://api.themoviedb.org/3/${searchParams.genre? "movie/"+ searchParams.genre : "trending/all/day"}?api_key=e03e9ce72ddf6d14214f80c3130d0b6f&language=en-US&page=1`)
  const res= await data.json()
  return (
    <div>
      <Tabs/>
    <div className='flex items-center justify-center flex-wrap gap-3'>
      {res?.results?.map((item,i)=>(<Movies key={i} item={item}/>))}
    </div>
    </div>
  )
}

export default Page