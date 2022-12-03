import styles from '../styles/container.module.scss';

import ColumnProvider from '../providers/columnProvider';

import Column from './column'

const Container = () => {
  return (
    <div className={styles.container}>
      <ColumnProvider>
        <Column title="To do"/>
        <Column title="In progress"/>
        <Column title="Blocked"/>
        <Column title="Testing"/>
        <Column title="Done"/>
      </ColumnProvider>
    </div>
  )
}

export default Container