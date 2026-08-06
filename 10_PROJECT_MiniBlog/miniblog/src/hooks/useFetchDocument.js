//DB
import {db} from '../firebase/config'

//Hooks
import { useState, useEffect } from 'react'

//Functions
import {doc, getDoc} from 'firebase/firestore'

export const useFetchDocument = (docCollection, id) => {

    const [document, setDocument] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    //Deal with memory leak
    const [cancelled, setCancelled] = useState(false)


    useEffect(() => {

        async function loadDoc() {
            if(cancelled) return

            setLoading(true)

            try {
                const docRef = await doc(db, docCollection, id)
                const docSnap = await getDoc(docRef)

                setDocument(docSnap.data())

                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }

        loadDoc()
    }, [docCollection, id, cancelled])    

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { document, loading, error}
}