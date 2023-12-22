import {useState} from "react";

export function useLocalStorage(key: string, initialValue: string) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState<string>(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key)

            return item ? item : initialValue
        } catch (error) {
            // If error also return initialValue
            console.log(error)
            return initialValue
        }
    })

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value: string) => {
        try {
            setStoredValue(value)
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error)
        }
    }

    return [storedValue, setValue]
}