//Db
import { db } from "../firebase/config";

//Hooks
import { useState, useEffect, useReducer } from "react";

//Firebase
import { updateDoc, doc } from "firebase/firestore";

//Reducer
const initialStates = {
    loading: false,
    error: null
}

const updateReducer = (state, action) => {
    switch(action.type){
        case "LOADING":
            return {loading: true, error: null}
        case "UPDATED-DOC":
            return {loading: false, error: null}
        case "ERROR":
            return {loading: false, error: action.payload} //We'll pass this message on try catch
        default:
            return state //Returning state to don't broke the flux
    }
}

//Hook
export const useUpdateDocument = (docColletion) => { 

    const [response, dispatch] = useReducer(updateReducer, initialStates)

    //Deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const checkIfIsCancelledBeforeDispatch = (action) => {
        if(!cancelled){
            dispatch(action)
        }
    }

    const updateDocument = async(id, data) => {

        checkIfIsCancelledBeforeDispatch ({
            action: "LOADING"
        })

        try {

            const docRef = await doc(db, docColletion, id)
            const updatedDocument = await updateDoc(docRef, data)

            checkIfIsCancelledBeforeDispatch ({
                action: "UPDATED-DOC",
                payload: updatedDocument

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


    return {updateDocument, response}
}

