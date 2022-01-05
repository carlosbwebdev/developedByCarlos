import React from 'react';
import * as styles from '../css/title.module.css';

const Title = ({ title }) => {
  return (
    <div className={styles.sectionTitle} id="titleDark">
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
