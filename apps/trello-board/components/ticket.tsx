import styles from '../styles/ticket.module.scss';
import { FaComment } from "react-icons/fa";
import { useDrag } from 'react-dnd';

const Ticket = (props) => {

  const[{isDragging}, drag] = useDrag(() => ({
    type: "ticket",
    item: {id: props.id, column: props.column},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div
      className={styles.ticket}
      ref={drag}
      style={{ border: isDragging ? '1px solid skyblue' : '1px solid pink' }}
    >
      <label className={styles.label}> Label </label>

      <h1 className={styles.task}>
        {' '}
        Project task: Here goes a general description of the task{' '}
      </h1>
      <span className={styles.comments}>
        {' '}
        <FaComment /> 1
      </span>
    </div>
  );
}

export default Ticket