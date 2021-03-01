import React from 'react';
import styles from './CityHeader.module.scss';

class CityHeader extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { city } = this.props

    return (
      <div className={styles.CityHeader}>
        <h1>{ city }</h1>
      </div>
    )
  }
}

export default CityHeader;