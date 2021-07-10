const isValidDate = date => {
  const parsedDate = Date.parse(date)
  return !isNaN(parsedDate)
}

export default isValidDate
