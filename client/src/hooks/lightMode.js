import React, {useState} from 'react'
import useLocalStorage from './useLocalStorage'

const useLightMode = (key, initialValue) => {
    const [background, setBackground] = useLocalStorage(key, initialValue)

    return [background, setBackground]
}

export default useLightMode;