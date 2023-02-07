const emojiUnicode = [
  'U+2708', 'U+1F6E9', 'U+1F6EB',
  'U+1F6EC', 'U+1FA82', 'U+1F4BA',
  'U+1F681', 'U+1F69F', 'U+1F6A0',
  'U+1F6A1', 'U+1F6F0', 'U+1F680',
  'U+1F6F8',
]

function randomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojiUnicode.length)
  const codePoint = `0x${emojiUnicode[randomIndex].split('+')[1]}`
  return String.fromCodePoint(codePoint)
}

export { randomEmoji }
