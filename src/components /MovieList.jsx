import React from 'react'
import GeneralList from './Constant/GeneralList'
import NewList from './NewList'

function MovieList() {
  return (
    <div>
      {GeneralList.genere.map((item,index)  => index <= 5&& (
        <div className='p-8 px-8 md:px-16'>
            <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
            <NewList genreId={item.id}/>
        </div>
      ))}
    </div>
  )
}

export default MovieList
