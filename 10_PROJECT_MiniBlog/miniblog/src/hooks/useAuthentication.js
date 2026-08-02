//Import Firebase
import {db} from '../firebase/config'

//Firebase Imports
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'

//React Imports
import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    //States
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // Cleanup 
    const [cancelled, setCancelled] = useState(false)

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }
     
    //Authentication
    const auth = getAuth()

    //Create User
    const createUser = async(data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError(null)

        try {
            
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {displayName: data.displayName})

            setLoading(false)

            return user
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa ser mais forte!!"
            } else if(error.message.includes("email-already")){
                systemErrorMessage = "Email já está em uso!"
            } else{
                systemErrorMessage = "Ocorreu um erro :("
            }

            setError(systemErrorMessage)
        }

        
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {auth, createUser, error, loading}

}