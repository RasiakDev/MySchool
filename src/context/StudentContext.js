import React, {createContext} from 'react'
import { studentsList } from '../data/studentData'

export const StudentContext = createContext()


export function StudentProvider({children}) {
    return (
        <StudentContext.Provider value={studentsList}>
            {children}
        </StudentContext.Provider>
    )
}


