import Movies from '@/components/Movies'
import React from 'react'

const Page = async ({params}) => {
const keyword= params.keyword
const res= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e03e9ce72ddf6d14214f80c3130d0b6f&query=${keyword}&language=en-US&include_adult=false`)
const data= await res.json()
console.log(data,"data")
  return (
    <div className='flex items-center justify-center flex-wrap gap-3'>
      {data?.results?.map((item,i)=>(<Movies key={i} item={item}/>))}
    </div>
  )
}

export default Page