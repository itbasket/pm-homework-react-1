import React from 'react';
import DayInfo from './components/DayInfo/DayInfo';
import CardsContainer from './containers/CardsContainer/CardsContainer';
import styles from './App.module.scss';
import weather from './weather.json';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      weather,
      activeDay: weather[0],
      city: 'Kyiv'
    }
  }

  changeActiveDay(day) {
    this.setState({
      activeDay: day
    })
  }

  getIcon() {
    const iconClasses = {
      snowy: 'wi-snow',
      thunderstorm: 'wi-thunderstorm',
      rainy: 'wi-rain',
      fog: 'wi-fog',
      cloudy: 'wi-cloudy',
      sunny: 'wi-day-sunny'
    }

    return iconClasses[this.state.activeDay.commonWeather]
  }

  render() {
    const { weather, activeDay, city } = this.state
    const classes = [styles.mainBg, styles[activeDay.commonWeather]]

    return (
      <div className={styles.App}>
        <div className={classes.join(' ')}></div>
        <div className={styles.weatherContainer}>
          <DayInfo data={activeDay} city={city} icon={this.getIcon()} />
          <CardsContainer weather={weather} activeDay={activeDay.date} city={city} icon={this.getIcon()} changeActiveDay={this.changeActiveDay.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App;