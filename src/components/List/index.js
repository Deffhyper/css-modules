import React from 'react';
import styles from './styles.module.scss';

const List = ({
  records,
  }) => (
  <ul className={styles.list}>
    {records.map(country => (
      <li
        key={country.alpha2Code}
        className={styles.item}
      >
        <div className={styles.image}>
          <img src={country.flag} alt="flag" className={styles.flag} />
        </div>
        <span className={styles.name}>Name: {country.name}</span>
        <span className={styles.capital}>Capital: {country.capital}</span>
      </li>
    ))}
  </ul>
)

export default List;
