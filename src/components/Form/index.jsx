import React, {useState, useEffect} from 'react';
import List from '../List'

import styles from './styles.module.scss';

const Form = () => {
  const [countries, setCountry] = useState([]);
  const [search, setSearch] = useState('Ukraine');

  const onChangeHandler = ({target}) => {
    setSearch(target.value)
  };

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${search}`)
      .then((response) => {
        if (response.status === 404) {
          return []
        }
        return response.json()
      })
      .then(result => setCountry(result));
  },[search]);

  return (
    <>
      <form className={styles.form}>
        <label htmlFor="search" className={styles.label}>Text search</label>
        <input
          type="text"
          id="search"
          className={styles.input}
          value={search}
          onChange={onChangeHandler}
        />
      </form>
      {console.log(countries)}
      <List records={countries} />
    </>
  )
}

export default Form;
