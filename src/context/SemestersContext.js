import React, {createContext, useState} from 'react'

export const SemestersContext = createContext()

export function SemestersProvider({children}) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <SemestersContext.Provider value={{modalVisible, setModalVisible}}>
            {children}
        </SemestersContext.Provider>
    )
}

