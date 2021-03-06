import { createContext, useEffect, useReducer } from "react";
import loginReducer from "./Reducer";

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null, 
    isFetching: false,
    error: false
};

export const Context = createContext(initialState);

export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(loginReducer, initialState);

    useEffect(() => {

        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

    return(
        <Context.Provider value={{

            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )

}