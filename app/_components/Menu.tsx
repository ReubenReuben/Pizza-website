"use client";
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from './CartIcon';

const links =[
    {id: 1, tittle: "Homepage",url:'/'},
    {id: 2, tittle: "Menu",url:'/menu'},
    {id: 3, tittle: "Working Hours",url:'/'},
    {id: 4, tittle: "Contacts",url:'/'}
   
];


const Menu = () => {
  const user=false;
    const [open, setOpen]= useState(false);

  return (
    <div>
    {!open ? (

    <Image src={"/pictures/open.png" }alt='' width={20} 
    height={20} onClick={() =>setOpen(true)}></Image>
    
    ) : (
        <Image src={"/pictures/close.png" }alt='' width={20} 
        height={20} onClick={() =>setOpen(false)}></Image>
    )}
    
{ open &&(   <div className='bg-red-500 text-white absolute left-0 top-24  w-full
    h-[clac(100vh-6rem)] flex flex-col gap-8 items-center justify-center text=3xl z-10'>
      {links.map((item) =>(
        <Link href={item.url} key={item.id} onClick={() =>setOpen(false)}>
        {item.tittle}
        </Link>
      ))}
      {!user ? (
        <Link href="login" onClick={() =>setOpen(false)}>login</Link>
      ) : (
        <Link href="/orders" onClick={() =>setOpen(false)}>orders</Link>
      )
    }
    <Link href='/cart' onClick={() =>setOpen(false)}>
      <CartIcon/>
    </Link>

    </div>
    )}
    </div>
  );
  };


export default Menu