// write your custom hook here to control your checkout form
import {React, useState} from 'react'

const useForm = (key, initialValue) => {
    const [form, setForm] = useState(key, initialValue)

    const handleChanges = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return [form, handleChanges]
}

export default useForm