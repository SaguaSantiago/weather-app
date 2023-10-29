export const getDirection = (degrees) => {
  const value = degrees / 360
  const index = Math.floor(value * 8)
  const directions = [
    'North',
    'Northwest',
    'East',
    'Southeast',
    'South',
    'Southwest',
    'West',
    'Northwest',
  ]

  return directions[index]
}
