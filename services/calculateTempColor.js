export const calculateTempColor = (temp) => {
  const coldColor = [0, 255, 255]
  const hotColor = [239, 83, 80]

  const factor = (temp - 0) / (20 - 0)
  const finalColor = coldColor.map((channel, i) => {
    const channelDelta = hotColor[i] - channel
    return Math.round(channel + channelDelta * factor)
  })

  return `rgb(${finalColor.join(' ')})`
}
