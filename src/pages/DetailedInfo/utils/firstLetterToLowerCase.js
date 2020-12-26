const firstLetterToLowerCase = (string) => {
  if (typeof string !== 'string') {
    console.error('only strings are accepted')
    return ''
  }
  return string[0].toLowerCase() + string.slice(1)
}

export default firstLetterToLowerCase
