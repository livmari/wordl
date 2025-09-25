'use client'

import { createContext, useContext, ReactNode, useState } from 'react'

type DifficultyType =
  | 'easy' // 8 cards
  | 'annoying' // 24 cards
  | 'impossible' // 40 cards

interface GameContextType {
  difficulty: DifficultyType
  setDifficulty: React.Dispatch<React.SetStateAction<DifficultyType>>
}

const GameContext = createContext<GameContextType | undefined>(undefined)

interface GameProviderType {
  children: ReactNode
}

const GameProvider = ({ children }: GameProviderType) => {
  const [difficulty, setDifficulty] = useState<DifficultyType>('easy')

  return (
    <GameContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </GameContext.Provider>
  )
}

const useGame = () => {
  const context = () => {
    useContext(GameContext)

    if (context === undefined) {
      throw new Error('useGame must be used within a GameProvider')
    }
  }

  return context
}

export { GameProvider }
