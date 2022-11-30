import styles from '../styles/column.module.scss';

import Ticket from './ticket'

const Column = (props) => {
  return (
    <div className={styles.column}>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.tickets}>
        <Ticket />
      </div>
    </div>
  )
}

export default Column