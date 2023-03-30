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
    const [currentSeason, setCurrentSeason] = useState(semesters[0])
    const [addStudentVisible, setAddStudentVisible] = useState(false)
    useEffect(()=> {
        semesters.forEach((item) => {
            if(item.currentSeason == true){
                setCurrentSeason(item)
                
            }
        })
    }, [currentSeason])
    const [selectedYear, setSelectedYear] = useState(semesters[0])
    const [isCurrentSeason, setIsCurrentSeason] = useState(true)
    const [errorState, setErrorState] = useState({})
    const [inputValue, setInputValue] = useState({
        year: '',
        students: [],
        classrooms: [],
    })

    const [addClassroomModalVisible, setAddClassroomModalVisible] = useState(false)
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
    //toggle for ViewClassroomModal.js
    const handleViewClassroomModal = (value, selectedClassroom) => {
        if(value)
            setSelectedClassroom(selectedClassroom)
        setViewClassroomModal(value)
    }
    //toggle for SimpleStudentsTable.js modal for add student in classroom
    const handleAddStudentInClassroomModal = (visible) => {       
        setAddStudentVisible(visible)
        setCheckedArray([])
    }
    //toggle for AddClassroomModal.js
    const handleAddClassroomModal = (visible) => {
        setAddClassroomModalVisible(visible)
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
    

    //Add student in selected classRoom
    const addStudentInClassroom = () => {
       semesters.map(item =>{
            if(item.id == selectedYear.id){
                item.classRooms.map(classRoom => {
                    if(classRoom.id == selectedClassroom.id){
                        classRoom.students.push(...checkedArray)
                        setAddStudentVisible(false)                        
                        checkedArray.map(selectedStudent => {
                            studentsList.map(student =>{
                                if(student.id === selectedStudent.id){
                                    student.level = selectedClassroom.level
                                    student.assignedClass = selectedClassroom.name
                                }
                            })
                            semesters.map((year) => {
                                year.students.map(student => {
                                    if(student.id === selectedStudent.id){
                                        student.level = selectedClassroom.level
                                        student.assignedClass = selectedClassroom.name
                                    }
                                })
                            })
                            
                        })
                        
                        
                    }
                })
            }
       })
       
       setCheckedArray([])
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
                addStudentVisible,
                addClassroomModalVisible,
                semesters,
                handleAddClassroomModal,
                addStudentInClassroom,
                handleAddStudentInClassroomModal,
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

