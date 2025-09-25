export function generateEmojiPairs(count: number): string[] {
  const emojiPool = [
    '😀',
    '🐶',
    '🍕',
    '🚀',
    '🌈',
    '🎉',
    '🐱',
    '🦄',
    '🍎',
    '⚽️',
    '📚',
    '🎮',
    '🧩',
    '🎨',
    '🛸',
    '🐸',
  ]

  if (count > emojiPool.length) {
    throw new Error(
      `Cannot generate ${count} unique pairs. Max is ${emojiPool.length}`,
    )
  }

  const selectedEmojis = emojiPool
    .sort(() => 0.5 - Math.random())
    .slice(0, count)

  const emojiPairs = [...selectedEmojis, ...selectedEmojis]

  const shuffled = emojiPairs
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value)

  return shuffled
}
