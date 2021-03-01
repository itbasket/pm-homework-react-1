import React from 'react';
import styles from './Card.module.scss';
import { getWeatherIcon } from '../../utils/utils';

class Card extends React.Component {
  constructor() {
    super();
  }

  getTime() {
    const { data } = this.props
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const date = new Date(data.date)
    const dayName = dayNames[date.getDay()].slice(0, 3)
    const month = monthNames[date.getMonth()]
    let day = date.getDate()
    const year = date.getFullYear().toString().slice(2)

    switch(day.toString().slice(-1)) {
      case "1":
        day = `${day}st`;
        break;
      case "2":
        day = `${day}nd`;
        break;
      case "3":
        day = `${day}rd`;
        break;
      default:
        day = `${day}th`;
        break;
    }

    return {
      dayName,
      month,
      day,
      year
    }
  }

  render() {
    const { data, active, onClick } = this.props
    const classes = [styles.Card]

    if (active) {
      classes.push(styles.active)
    }

    return (
      <div className={classes.join(' ')} onClick={onClick}>
        <div className={styles.date}>
          <h2>{this.getTime().dayName}</h2>
          <h3>{this.getTime().month} {this.getTime().day} {this.getTime().year}</h3>
        </div>
        <div className={styles.desc}>
          <p>{data.temperature.min}<i className="wi wi-degrees"></i></p>
          <p>{data.temperature.max}<i className="wi wi-degrees"></i></p>
          <i className={`wi ${getWeatherIcon(data.commonWeather)}`}></i>
        </div>
      </div>
    )
  }
}

export default Card;