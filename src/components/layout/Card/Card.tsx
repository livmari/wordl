'use client'

import React, { useState } from 'react'

import styles from './Card.module.scss'

interface CardProps {
  emoji: string
}

const Card: React.FC<CardProps> = ({ emoji }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={`aspect-square border text-4xl ${styles.card}`}>
      <div className={`h-full w-full ${styles.content}`}>
        <div className={`flex items-center justify-center ${styles.front}`}>
          NO!
        </div>
        <div className={`flex items-center justify-center ${styles.back}`}>
          {emoji}
        </div>
      </div>
    </div>
  )
}

export default Card

{
  /* <div className={'perspective h-20 w-20'} onClick={handleClick}>
      <div
        className={`transform-style-preserve-3d relative h-full w-full transition-transform duration-500 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute flex h-full w-full rotate-y-180 items-center justify-center rounded bg-gray-300 text-2xl shadow-md backface-hidden">
          ❓
        </div>
        <div
          className={
            'absolute flex h-full w-full items-center justify-center rounded bg-white text-2xl shadow-md backface-hidden'
          }
        >
          {emoji}
        </div>
      </div>
    </div> */
}
