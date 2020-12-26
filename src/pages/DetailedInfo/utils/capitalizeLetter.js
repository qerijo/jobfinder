const capitalizeLetter = (string) => {
  if (typeof string !== 'string') {
    console.error('only strings are accepted')
    return ''
  }
  return string[0].toUpperCase() + string.slice(1)
}

export default capitalizeLetter
