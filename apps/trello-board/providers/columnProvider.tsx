import { createContext, useContext, useState } from "react";

const ColumnContext = createContext(undefined);

const ColumnProvider = ({ children }) => {
  const [todoTickets, setTodoTickets] = useState(["Task 1", "Task 2", "Task 3", "Task 4", "Task 5", "Task 6"])
  const [inProgressTickets, setInProgressTickets] = useState(["Task 1", "Task 2", "Task 3"])
  const [blockedTickets, setBlockedTickets] = useState(["Task 1"])
  const [testingTickets, setTestingTickets] = useState(["Task 1", "Task 2", "Task 3", "Task 4"])
  const [doneTickets, setDoneTickets] = useState(["Task 1", "Task 2", "Task3"])

  // const addTask = (newTask) => {
  //   setTodoList([...todoList, newTask])
  // }

  const contextValue = {
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
  }

  return (
    <ColumnContext.Provider value={contextValue}>{children}</ColumnContext.Provider>
  )
}

export const useColumnContext = () => useContext(ColumnContext); // This is what triggers the re-renders when the value changes

export default ColumnProvider