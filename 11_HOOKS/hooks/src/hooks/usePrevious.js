//This custom hook saves the previous value of a state
import { useEffect, useRef } from "react";

export const usePrevius = (value) => {
    const ref = useRef()

    useEffect(() => {
        ref.current = value
    })

    return ref.current
}