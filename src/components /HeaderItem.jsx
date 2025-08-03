import React from 'react'

function HeaderItem({name , Icon}) {
  return (
    <div className="flex text-white items-center gap-3 text-[20px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
      <Icon/>
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
