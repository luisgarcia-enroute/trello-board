import styles from '../styles/column.module.scss';

import { useColumnContext } from '../providers/columnProvider';
import { useDrop } from 'react-dnd';

import Ticket from './ticket'
//import { Props } from 'next/script';

const Column = (props) => {

  const {
    todoTickets, 
    setTodoTickets, 
    inProgressTickets, 
    setInProgressTickets,
    blockedTickets, 
    setBlockedTickets,
    testingTickets, 
    setTestingTickets,
    doneTickets,
    setDoneTickets
  } = useColumnContext()
  // const [column, setColumn] = useState([])
  const [{isOver}, drop] = useDrop(() => ({
    accept: "ticket",
    drop: (item) => addTicketToColumn(item.id, item.column),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  const addTicketToColumn = (id, column) => {
    console.log("id:", id)
    console.log("column:", column)
    if (column === "To do") {
      setTodoTickets(todoTickets.slice(1))
      setInProgressTickets([...inProgressTickets, "New task"])
    }
    // 1. Grab the column title for which the ticket belongs
    // 2. When dropping grab the column title in which the ticket was dropped
    // 3. Remove ticket from the first column array
    // 4. Add ticket to the second column array

  }

  /* Currently fixing this because typescript is behaving weirdly */

  // const renderTickets = (ticketsArray): any => {
  //   ticketsArray.map((ticket, index) => {
  //     console.log("Ticket: ", ticket)
  //     return (
  //       <Ticket key={`ticket-${index}`}/>
  //     )
  //   })
  // }



  return (
    <div className={styles.column} ref={drop}>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.tickets}>
        { 
          // Temporal solution while I check why the function is not working
          props.title === "To do" ? 
            todoTickets.map((ticket, index) => {
            return (
              <Ticket key={`ticket-${index}`} id={`ticket-${index}`} column="To do"/>
            )
          }) : 
          props.title === "In progress" ? 
            inProgressTickets.map((ticket, index) => {
            return (
              <Ticket key={`ticket-${index}`} id={`ticket-${index}`} column="In progress"/>
            )
          }) : 
          props.title === "Blocked" ?  
            blockedTickets.map((ticket, index) => {
            return (
              <Ticket key={`ticket-${index}`} id={`ticket-${index}`} column="Blocked"/>
            )
          }) : 
          props.title === "Testing" ?  
            testingTickets.map((ticket, index) => {
            return (
              <Ticket key={`ticket-${index}`} id={`ticket-${index}`} column="Testing"/>
            )
          }) : 
          props.title === "Done" ? 
            doneTickets.map((ticket, index) => {
            return (
              <Ticket key={`ticket-${index}`} id={`ticket-${index}`} column="Done"/>
            )
          }) : console.log("Do nothing")
        }

      </div>
    </div>
  )
}

export default Column

// 1. We know which column it is because of the title prop
// 2. Knowing which column we have, we can get the correspondent array from context