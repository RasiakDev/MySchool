import React, {createContext, useContext, useState} from 'react'
import { semesters } from '../data/studentData'
import { StudentContext } from './StudentContext'

export const SemestersContext = createContext()

export function SemestersProvider({children}) {

    const {checkedArray, setCheckedArray} = useContext(StudentContext)
    //toggle for AddSemesterModal.js
    const [addSemesterModal, setAddSemesterModal] = useState(false)
    //toggle for ViewSemesterModal.js
    const [viewSemesterModal, setViewSemesterModal] = useState(false)
    const [selectedYear, setSelectedYear] = useState(semesters[0].classRooms)
    const [errorState, setErrorState] = useState({})
    const [inputValue, setInputValue] = useState({
        // year: '',
        // students: [],
        // classrooms: [],
    })
    const {year, students, classrooms} = inputValue
    //toggle for AddSemesterModal.js
    const handleAddSemesterModal = (value) => {
        setAddSemesterModal(value)
        if(value === false)
            setErrorState({})
    }
    //toggle for ViewSemesterModal.js
    const handleViewSemesterModal = (data, value) => {
        console.log(data)
        setSelectedYear(data)
        setViewSemesterModal(value)
    }

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
            setAddSemesterModal(false)
            setInputValue({})
            setCheckedArray([])
        }else{
            handleErrorState('year', true)
        }
    }

    return (
        <SemestersContext.Provider 
            value={{
                errorState,
                addSemesterModal,
                viewSemesterModal,
                selectedYear,
                handleViewSemesterModal,
                handleAddSemesterModal,
                validation,
                handleChange,
                addNewSeason
            }}
        >
            {children}
        </SemestersContext.Provider>
    )
}

