import React from 'react';
import PropTypes from 'prop-types';
import styles from './DisplayCard.module.css';
import Navbar from '../Navbar/Navbar';

const DisplayCard = () => (
  <div className={styles.DisplayCard}>
    <Navbar/>
  </div>
);

DisplayCard.propTypes = {};

DisplayCard.defaultProps = {};

export default DisplayCard;
