import React from 'react';
import {ReactComponent as Logo} from '../../img/logo.svg';
import styles from './styles.module.scss';

const Header = () => (
  <div className={styles.header}>
    <Logo className={styles.logo} alt="logo" />
    <h1>Header</h1>
  </div>
)

export default Header;
