import React from 'react'
import styles from './Faq.module.css';
import classNames from 'classnames';
import FaqCard from './FaqCard/FaqCard';

function Faq() {
  return (
    <div className={classNames(styles.faqSection)}>
      <div className={classNames(styles.faqHeader)}>
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className={classNames(styles.faqCards)}>
        <ul>
          <li><FaqCard /></li>
          <li><FaqCard /></li>
          <li><FaqCard /></li>
          <li><FaqCard /></li>
          <li><FaqCard /></li>
          <li><FaqCard /></li>
        </ul>
      </div>
    </div>
  )
}

export default Faq