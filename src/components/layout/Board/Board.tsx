'use client'

import React, { useEffect, useState } from 'react'
import { generateEmojiPairs } from '@/utils/generateBoard'
import Card from '../Card/Card'

const Board: React.FC = () => {
  const [emojis, setEmojis] = useState<string[]>([])

  useEffect(() => {
    const newBoard = generateEmojiPairs(10) // 10 unique pairs = 20 cards
    setEmojis(newBoard)
  }, [])

  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {emojis.map((emoji, index) => (
        <Card key={index} emoji={emoji} />
      ))}
    </div>
  )
}

export default Board
