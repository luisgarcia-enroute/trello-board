import { useEffect } from 'react';
import styles from '../styles/column.module.scss';

import { useColumnContext } from '../providers/columnProvider';
import { useDrop } from 'react-dnd';

import Ticket from './ticket'

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
    setDoneTickets,
    addTask,
    removeTask
  } = useColumnContext()

  // useEffect(() => {
  //   addTicketToColumn(item.id, item.column, newColumn),
  // }, [todoTickets, inProgressTickets, blockedTickets, testingTickets, doneTickets])

  const [{isOver, newColumn}, drop] = useDrop(() => ({
    accept: "ticket",
    drop: (item) => addTicketToColumn(item.id, item.column, newColumn),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      newColumn: props.title
    })
  }))

  const addTicketToColumn = (id, column, newColumn) => {
    console.log("id:", id)
    console.log("column:", column)
    switch (column) {
      case "To do":
        setTodoTickets(todoTickets.slice(1));
        console.log("Todo tickets:", todoTickets)
        break;
      case "In progress":
        setInProgressTickets(inProgressTickets.slice(1));
        break;
      case "Blocked":
        setTodoTickets(todoTickets.slice(1));
        break;
      case "Testing":
        setTodoTickets(todoTickets.slice(1));
        break;
      case "Done":
        setTodoTickets(todoTickets.slice(1));
        break;
      default:
        console.log('column');
    }

    switch (newColumn) {
      case "To do":
        setTodoTickets([...todoTickets, "New task"])
        break;
      case "In progress":
        setInProgressTickets([...inProgressTickets, "New task"])
        console.log("In progress tickets: ", inProgressTickets)
        break;
      case "Blocked":
        setBlockedTickets([...blockedTickets, "New task"])
        break;
      case "Testing":
        setTestingTickets([...testingTickets, "New task"])
        break;
      case "Done":
        setDoneTickets([...doneTickets, "New task"])
        break;
      default:
        console.log('column');
    }
  }

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