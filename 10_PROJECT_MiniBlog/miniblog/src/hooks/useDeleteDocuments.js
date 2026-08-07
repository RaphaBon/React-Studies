//DB
import {db} from '../firebase/config'

//Hooks
import { useState, useEffect, useReducer } from "react";

//Firebase
import { doc, deleteDoc } from "firebase/firestore";

//Reducer
const initialStates = {
    loading: false,
    error: null
}

const deleteReducer = (state, action) => {
    switch(action.type){
        case "LOADING":
            return {loading: true, error: null}
        case "DELETED-DOC":
            return {loading: false, error: null}
        case "ERROR":
            return {loading: false, error: action.payload} //We'll pass this message on try catch
        default:
            return state //Returning state to don't broke the flux
    }
}

//Hook
export const useDeleteDocuments = (docColletion) => { 

    const [response, dispatch] = useReducer(deleteReducer, initialStates)

    //Deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const checkIfIsCancelledBeforeDispatch = (action) => {
        if(!cancelled){
            dispatch(action)
        }
    }

    const deleteDocument = async(id) => {

        checkIfIsCancelledBeforeDispatch ({
            action: "LOADING"
        })

        try {
            const deletedDocument = await deleteDoc(doc(db, docColletion,id))

            checkIfIsCancelledBeforeDispatch ({
                action: "DELETED-DOC",
                payload: deletedDocument
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


    return {deleteDocument, response}
}

