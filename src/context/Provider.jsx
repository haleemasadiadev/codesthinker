import { createContext, useContext, useReducer, useState } from "react";

const counterContext = createContext();

const counterReducer = (state, action) => {
    if (action.type === 'increment') {
        return state + 1;
    } else if (action.type === 'decrement') {
        return state - 1;
    } else if (action.type === 'reset') {
        return state = 0
    } else {
        return null
    }
}

export function CounterProvider({ children }) {
    const [count, dispatch] = useReducer(counterReducer, 0);
    const [name,setName] = useState("Shakeel");
    return (
        <counterContext.Provider value={{ count, dispatch ,name,setName}}>
            {children}
        </counterContext.Provider>
        
    )
}

export function useCounter(){
    return useContext(counterContext);
}


