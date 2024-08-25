"use client";
import Cursor from '@/components/main/Cursor'
import Navbar from '@/components/main/Navbar'
import StarsCanvas from '@/components/main/StartBackground'
import React from 'react'

const IndexPage = () => {
  return (
    <div>
      <Cursor />
      <StarsCanvas />
      <Navbar />
    </div>
  )
}

export default IndexPage