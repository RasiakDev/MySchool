import React, {createContext, useContext, useEffect, useState} from 'react'
import { semesters, studentsList } from '../data/studentData'
import { StudentContext } from './StudentContext'

export const SemestersContext = createContext()

export function SemestersProvider({children}) {

    const {checkedArray, setCheckedArray} = useContext(StudentContext)
    //toggle for AddSemesterModal.js
    const [addSemesterModal, setAddSemesterModal] = useState(false)

    //toggle for ViewSemesterModal.js
    const [viewSemesterModal, setViewSemesterModal] = useState(false)
    //toggle for ViewClassroomModal.js
    const [viewClassroomModal, setViewClassroomModal] = useState(false)
    const [selectedClassroom, setSelectedClassroom] = useState()
    const [currentSeason, setCurrentSeason] = useState(semesters[0].classRooms)
    useEffect(()=> {
        semesters.forEach((item) => {
            if(item.currentSeason == true){
                setCurrentSeason(item.classRooms)
            }
        })
    }, [currentSeason])
    const [selectedYear, setSelectedYear] = useState(semesters[0].classRooms)
    const [isCurrentSeason, setIsCurrentSeason] = useState(true)
    const [errorState, setErrorState] = useState({})
    const [inputValue, setInputValue] = useState({
        year: '',
        students: [],
        classrooms: [],
    })
    const {year, students, classrooms} = inputValue
    //toggle for AddSemesterModal.js
    const handleAddSemesterModal = (value) => {
        setAddSemesterModal(value)
        if(value === false)
            setErrorState({})
    }
    //toggle for ViewSemesterModal.js
    const handleViewSemesterModal = (selectedYear, value) => {
        if(value)
            setSelectedYear(selectedYear)
        setViewSemesterModal(value)
    }
    const handleViewClassroomModal = (value, selectedClassroom) => {
        if(value)
            setSelectedClassroom(selectedClassroom)
        setViewClassroomModal(value)
        console.log(selectedClassroom)
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
                viewClassroomModal,
                selectedYear,
                selectedClassroom,
                isCurrentSeason,
                currentSeason,
                setIsCurrentSeason,
                handleViewClassroomModal,
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

