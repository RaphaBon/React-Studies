//Import Firebase
import {db, app} from '../firebase/config'

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
    const auth = getAuth(app);

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

    //LogOut
    const logOut = () => {
        checkIfIsCancelled()

        signOut(auth)
    }

    //LogInn
    const login = async(data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError(false)

        try {

            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)

        } catch (error) {
            let systemErrorMessage

        if (error.message.includes("invalid-credential")) {
        systemErrorMessage = "E-mail ou senha incorretos.";
        }
        else if(error.message.includes("user-not-found")) { // Tratamento de erro descontinuado no firebase por informar em ataques hackers que este e-mail não está cadastrado
        systemErrorMessage = "Usuário não encontrado.";
        }
        else if(error.message.includes("wrong-password")) { // Tratamento de erro descontinuado no firebase por informar em ataques hackers que o usuário existe e a senha está incorreta
        systemErrorMessage = "Senha incorreta.";
        }
        else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
        }
            setError(systemErrorMessage)
            setLoading(false)
        }

    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {auth, createUser, logOut, login, error, loading}

}