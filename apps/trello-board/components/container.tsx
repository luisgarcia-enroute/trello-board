import styles from '../styles/container.module.scss';

import Column from './column'

const Container = () => {
  return (
    <div className={styles.container}>
      <Column title="To do"/>
      <Column title="In progress"/>
      <Column title="Blocked"/>
      <Column title="Testing"/>
      <Column title="Done"/>
    </div>
  )
}

export default Container