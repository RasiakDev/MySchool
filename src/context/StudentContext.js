import React, {createContext, useState} from 'react'
import { studentsList, semesters } from '../data/studentData'

export const StudentContext = createContext()



export function StudentProvider({children}) {
    const [modalVisible, setModalVisible] = useState(null)
    const [modalData, setModalData] = useState(null)
    const handleUserModal = (visible, item) => {
        setModalVisible(visible)
        setModalData(item)
    }
    return (
        <StudentContext.Provider 
            value={{
                studentsList, 
                semesters,
                modalVisible,
                modalData,
                handleUserModal,
            }}>
            {children}
        </StudentContext.Provider>
    )
}


