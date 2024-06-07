export const shuffleString = (text: string) => {
  const array = text.split('')
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (array.length - 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array.join('')
}
