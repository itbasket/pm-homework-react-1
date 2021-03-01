import React from 'react';
import styles from './CardsContainer.module.scss';
import Card from '../../components/Card/Card';
import CityHeader from '../../components/CityHeader/CityHeader';

class CardsContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { weather, activeDay, city, changeActiveDay } = this.props

    return (
      <div className={styles.CardsContainer}>
        <CityHeader city={city} />
        { weather.map(day => {
          return <Card
            key={new Date(day.date).getTime()}
            data={day}
            active={day.date === activeDay}
            onClick={() => changeActiveDay(day)}
          />
        })
        }
      </div>
    )
  }
}

export default CardsContainer;