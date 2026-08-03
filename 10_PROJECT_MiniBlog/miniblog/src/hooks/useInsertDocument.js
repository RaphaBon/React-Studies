//Db
import { db } from "../firebase/config";

//Hooks
import { useState, useEffect, useReducer } from "react";

//Firebase
import { collection, addDoc, Timestamp } from "firebase/firestore";

//Reducer
const initialStates = {
    loading: false,
    error: null
}

const insertReducer = (state, action) => {
    switch(action.type){
        case "LOADING":
            return {loading: true, error: null}
        case "INSERTED-DOC":
            return {loading: false, error: null}
        case "ERROR":
            return {loading: false, error: action.payload} //We'll pass this message on try catch
        default:
            return state //Returning state to don't broke the flux
    }
}

//Hook
export const useInsertDocument = (docColletion) => { 

    const [response, dispatch] = useReducer(insertReducer, initialStates)

    //Deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const checkIfIsCancelledBeforeDispatch = (action) => {
        if(!cancelled){
            dispatch(action)
        }
    }

    const insertDocument = async(document) => {

        checkIfIsCancelledBeforeDispatch ({
            action: "LOADING"
        })

        try {

            const newDocument = {...document, createdAt: Timestamp.now()}
            const insertedDocument = await addDoc(collection(db, docColletion), newDocument)

            checkIfIsCancelledBeforeDispatch ({
                action: "INSERTED-DOC",
                payload: insertedDocument

            })

        } catch (error) {
            checkIfIsCancelledBeforeDispatch ({
                action: "ERROR",
                payload: error.message
            })
        }
    }

    useEffect(() => {
        return setCancelled(true)
    }, [])


    return {insertDocument, response}
}

