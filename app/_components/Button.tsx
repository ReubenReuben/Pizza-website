import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon';
import Image from 'next/image';

const Button = () => {
const user= false;
  return (
    <div className='h-12 text-red-500 p-4 flex items-center
     justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
    {/* //left */}
    <div className='hidden md:flex gap-4 flex-1'>
      <Link href="/">HomePage</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/">Contacts</Link>

    </div>
    {/* //logo */}
    <div className=' text-xl  md:font-bold flex-1 md:text-center'>
 
          <Link href={""}>Baypitsa Pitsa</Link>
          </div>
    <div className='md:hidden'>
      
          <Menu/>
    </div>
    {/* //right */}
    <div className='hidden md:flex gap-4 items-center flex-1 justify-end'>
      <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer px-1 bg-orange-200 rounded-md'>
        <Image src="/pictures/phone.png" alt='' width={20} height={20}/>
        <span>062 946 5075</span>
      </div>
    
      {!user ? (
       <Link href="/login">login</Link>
      ):(
        <Link href="/orders">orders</Link>
      )}
      <CartIcon/>
    </div>
  </div>
)
  }
export default Button