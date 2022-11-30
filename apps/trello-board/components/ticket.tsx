import styles from '../styles/ticket.module.scss';
import { FaComment } from "react-icons/fa";

const Ticket = () => {
  return (
    <div className={styles.ticket}>
      <label className={styles.label}> Label </label>
      <h1 className={styles.task}> Project task: Here goes a general description of the task </h1>
      <span className={styles.comments}> <FaComment /> 1</span>
    </div>
  )
}

export default Ticket