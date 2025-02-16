function getSecondAgo(timestamp) {
  const timestampCurrent = Date.now()
  const timestampDelta = timestampCurrent - timestamp
  const seconds = timestampDelta / 1000
  return Math.floor(seconds)
}

module.exports = getSecondAgo
