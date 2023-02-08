import React, {createContext, useContext, useState} from 'react'
import { semesters } from '../data/studentData'
import { StudentContext } from './StudentContext'

export const SemestersContext = createContext()

export function SemestersProvider({children}) {

    const {checkedArray, setCheckedArray} = useContext(StudentContext)

    const [modalVisible, setModalVisible] = useState(false)
    const [errorState, setErrorState] = useState({
        
    })
    const [inputValue, setInputValue] = useState([{
        // year: '',
        // students: [],
        // classrooms: [],
    }])
    const {year, students, classrooms} = inputValue

    const validation = (e) => {
        const {name, value} = e.target
        if(!value)
            handleErrorState(name, false)
    }

    const handleErrorState = (name, value) => {
        setErrorState((prevState) => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }
    // handle Semester name input 
   const handleChange = (e) => {
       const {name, value} = e.target
       handleErrorState(name, false)
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
        if(inputValue.year === undefined || inputValue.year === null){
            handleErrorState('year', true)
        }
        else if(inputValue.year.length !== 0){
            semesters.push(inputValue)
            setModalVisible(false)
            setInputValue({})
            setCheckedArray([])
        }else{
            handleErrorState('year', true)
        }
    }

    return (
        <SemestersContext.Provider 
            value={{
                modalVisible,
                errorState,
                validation,
                setModalVisible,
                handleChange,
                addNewSeason
            }}
        >
            {children}
        </SemestersContext.Provider>
    )
}

