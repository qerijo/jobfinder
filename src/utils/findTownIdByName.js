const findTownIdByName = (arrayList, name) => {
  if (!arrayList) {
    return false
  }
  const findInEl = (el, name) => {
    if (el.name.toLowerCase() === name.toLowerCase()) {
      return el.id
    }
    return findInElArray(el.areas, name)
  }
  const findInElArray = (arrayList, name) => {
    if (!arrayList.length) {
      return false
    }
    const attempt = findInEl(arrayList[0], name)
    if (attempt) {
      return attempt
    }
    return findInElArray(arrayList.slice(1), name)
  }
  return findInElArray(arrayList, name)
}

export default findTownIdByName
