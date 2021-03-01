export const getWeatherIcon = weather => {
  const iconClasses = {
    snowy: 'wi-snow',
    thunderstorm: 'wi-thunderstorm',
    rainy: 'wi-rain',
    fog: 'wi-fog',
    cloudy: 'wi-cloudy',
    sunny: 'wi-day-sunny'
  }

  return iconClasses[weather]
}

export const getWindIcon = direction => {
  const windClasses = {
    snowy: 'wi-snow',
    thunderstorm: 'wi-thunderstorm',
    rainy: 'wi-rain',
    fog: 'wi-fog',
    cloudy: 'wi-cloudy',
    sunny: 'wi-day-sunny'
  }

  return windClasses[direction]
}
