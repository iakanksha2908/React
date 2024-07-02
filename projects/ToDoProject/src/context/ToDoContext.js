import {createContext, useContext} from "react"

const toDoContext = createContext({

    todos: [
        {
            id: 1,
            todo: "Message 1",
            completed: false,
        }
    ],

    //methods
    addTodo: (todo) => {},
    updateTodo: (id, to) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}


})



export const useToDo = () => {
    return useContext(toDoContext)
}

export const ToDoProvider = toDoContext.Provider