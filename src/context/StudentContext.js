import React, {createContext} from 'react'
import { studentsList, semesters } from '../data/studentData'

export const StudentContext = createContext()

// export const getSemestersData = () => {

// }


export function StudentProvider({children}) {
    return (
        <StudentContext.Provider value={{studentsList, semesters}}>
            {children}
        </StudentContext.Provider>
    )
}


