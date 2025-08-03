import logo from './../assets/logo3.png'
import {HiHome,HiStar,HiMiniMagnifyingGlass, HiPlayCircle ,HiTv  } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import { useState } from 'react';


function Header() {
  const [toggle , setToggle] = useState(false)
    const menu = [
        {name:'HOME',icon:HiHome},
        {name:'SEARCH',icon:HiMiniMagnifyingGlass},
        {name:'WATCH LIST',icon:HiPlus},
        {name:'ORIGINALS',icon:HiStar},
        {name:'MOVIES',icon:HiPlayCircle},
        {name:'SERIES',icon:HiTv},
    ];
  return (
    <div className='flex items-center gap-12 justify-between p-10'>
      <div className='flex gap-12 items-center'>
       <img src={logo} className='w-[80px] h-[60px] md:w-[115px] object-cover'/>
      <div className='md:flex gap-8 hidden'>
        {menu.map((item , index)=>(
        <HeaderItem key={index} name={item.name} Icon={item.icon}/>
        ))}
      </div>
      <div className='flex md:hidden gap-5'>
        {menu.map((item , index)=> index<3&&(
        <HeaderItem key={index} name={''} Icon={item.icon}/>
        ))}
      </div>
      <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
        <HeaderItem name={''} Icon={HiDotsVertical}/>
        {toggle?
        <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
          {menu.map((item , index)=> index>2&&(
        <HeaderItem key={index} name={item.name} Icon={item.icon}/>
        ))}
        </div>
        :null}
      </div>
      </div>
      <img src="https://img.freepik.com/premium-vector/people-profile-icon_24877-40756.jpg?semt=ais_hybrid&w=740" className='w-[50px] rounded-full'/>
    </div>
  )
}

export default Header
