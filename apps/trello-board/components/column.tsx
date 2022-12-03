import styles from '../styles/column.module.scss';

import { useColumnContext } from '../providers/columnProvider';

import Ticket from './ticket'
import { Props } from 'next/script';

const Column = (props) => {

  const {todoTickets, inProgressTickets, blockedTickets, testingTickets, doneTickets} = useColumnContext()

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
    <div className={styles.column}>
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.tickets}>
        { 
          // Temporal solution while I check why the function is not working
          props.title === "To do" ? 
            todoTickets.map((ticket, index) => {
            console.log("Ticket: ", ticket)
            return (
              <Ticket key={`ticket-${index}`}/>
            )
          }) : 
          props.title === "In progress" ? 
            inProgressTickets.map((ticket, index) => {
            console.log("Ticket: ", ticket)
            return (
              <Ticket key={`ticket-${index}`}/>
            )
          }) : 
          props.title === "Blocked" ?  
            blockedTickets.map((ticket, index) => {
            console.log("Ticket: ", ticket)
            return (
              <Ticket key={`ticket-${index}`}/>
            )
          }) : 
          props.title === "Testing" ?  
            testingTickets.map((ticket, index) => {
            console.log("Ticket: ", ticket)
            return (
              <Ticket key={`ticket-${index}`}/>
            )
          }) : 
          props.title === "Done" ? 
            doneTickets.map((ticket, index) => {
            console.log("Ticket: ", ticket)
            return (
              <Ticket key={`ticket-${index}`}/>
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