import React, {createContext, useContext, useState} from 'react'
import { semesters } from '../data/studentData'
import { StudentContext } from './StudentContext'

export const SemestersContext = createContext()

export function SemestersProvider({children}) {

    const {checkedArray, setCheckedArray} = useContext(StudentContext)

    const [modalVisible, setModalVisible] = useState(false)
    const [inputValue, setInputValue] = useState([{
        year: '',
        students: [],
        classrooms: [],
    }])

    // handle Semester name input 
   const handleChange = (e) => {
       const {name, value} = e.target
       setInputValue((prevState) => {
           return{
               ...prevState,
               [name] : value,               
           }
        })
        inputValue.students = checkedArray
    }

    //submit new season
    const addNewSeason = () => {
        semesters.push(inputValue)
        setModalVisible(false)
        setCheckedArray([])
        console.log(semesters)
    }

    return (
        <SemestersContext.Provider 
            value={{
                modalVisible,
                inputValue,
                setModalVisible,
                handleChange,
                addNewSeason
            }}
        >
            {children}
        </SemestersContext.Provider>
    )
}

