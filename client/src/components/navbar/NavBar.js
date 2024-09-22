'use client'
import React from 'react'




//import CartProvider from '@/store/CartProvider'
import Container from '../globals/Container'
import Link from 'next/link'
import Menu from './Menu';

const NavBar = () => {
 
  return (
   
        <div className='bg-violet-400 py-4 text-gray-50 '>
        
   <Container className='flex  items-center  justify-between'>
   <Menu />
  
   </Container>
   </div>
   
  )
}

export default NavBar