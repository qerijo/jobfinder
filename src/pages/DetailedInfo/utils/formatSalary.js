const formatSalary = (salary) => {
  let text = ''
  if (salary) {
    const { currency } = salary
    if (salary.from && salary.to) {
      text = salary.from === salary.to ? `${salary.from} ${currency}` : `${salary.from} - ${salary.to} ${currency}`
    } else if (salary.from) {
      text = `от ${salary.from} ${currency}`
    } else {
      text = `до ${salary.to} ${currency}`
    }
  } else {
    text = 'не указана'
  }
  return text
}
export default formatSalary
