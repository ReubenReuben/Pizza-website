"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endingDate= new Date("2024-04-19")
const CountDownn = () => {
  return (
   <Countdown  className="font-bold text-yellow-300"
    
    date={endingDate}/>
  )
}

export default CountDownn