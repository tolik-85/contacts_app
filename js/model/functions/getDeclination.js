function getDeclination(number) {
  const declination = {
    секунду: [1],
    секунды: [2, 3, 4],
    секунд: [0, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  }
  const numStr = number.toString()
  const lastTwoDigits = Number(numStr.slice(-2))
  const lastDigit = Number(numStr.slice(-1))
  if (declination.секунд.includes(lastTwoDigits)) {
    return 'секунд'
  }
  if (declination.секунду.includes(lastDigit)) {
    return 'секунду'
  }
  if (declination.секунды.includes(lastDigit)) {
    return 'секунды'
  }
  return 'секунд'
}

module.exports = getDeclination
