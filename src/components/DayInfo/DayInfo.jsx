import React from 'react';
import styles from './DayInfo.module.scss';
import { getWeatherIcon } from '../../utils/utils';

class DayInfo extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { data, city } = this.props
    const classes = [styles.DayInfo, styles[data.commonWeather]]
    const weather = data.commonWeather.charAt(0).toUpperCase() + data.commonWeather.slice(1)

    return (
      <div className={classes.join(' ')}>
        <div className={styles.container}>
          <div className={styles.primary}>
            <div className={styles.temp}>
              <i className="wi wi-thermometer"></i>
              {` ${Math.round((data.temperature.min + data.temperature.max) / 2)}`}
              <i className="wi wi-degrees"></i>
            </div>
            <div className={styles.city}>
              {city}
            </div>
            <div className={styles.weather}>
              <i className={`wi ${getWeatherIcon(data.commonWeather)}`}></i>
              <span>{weather}</span>
            </div>
          </div>

          <div className={styles.secondary}>
            <div>
              <span>{data.pressure} </span><i className="wi wi-barometer"></i>
            </div>
            <div>
              <span>{data.humidity} </span><i className="wi wi-humidity"></i>
            </div>
            <div>
              <i className={`wi wi-wind wi-towards-${data.wind.direction.toLowerCase()}`}></i><i className={`wi wi-wind-beaufort-${data.wind.speed}`}></i><span> m/s</span>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default DayInfo;