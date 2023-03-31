import React, {createContext, useContext, useState, useEffect} from 'react'
import { StudentContext } from './StudentContext'
import { semesters, studentsList } from '../data/studentData'

export const ClassroomContext = createContext()
export function ClassroomProvider({children}) {

    const [addClassroomModal, setAddClassroomModal] = useState(false)
    const [addStudentsModal, setAddStudentsModal] = useState(false)
    const [editClassroomModal, setEditClassroomModal] = useState(false)
    const {checkedArray, setCheckedArray} = useContext(StudentContext)
    const [selectedYear, setSelectedYear] = useState()
    const [errorState, setErrorState] = useState({
        // course : false,
        // level : false,
        // teacher: false,
        // year: false,
        // weekDays: false,
        // startHours: false,
        // startMinutes: false,
        // endHours: false,
        // endMinutes: false,
        // name: false,
    }
    )
    const [classroomData, setClassroomData] = useState({
        course : '',
        level: '',
        teacher: '',
        year: '',
        weekDays : [],
        students : [],
        startHours : 0,
        startMinutes : 0,
        endHours : 0,
        endMinutes : 0,
        name : '',
    })
    const {
        course,
        level,
        teacher,
        year,
        weekDays,
        startHours,
        startMinutes,
        endHours,
        endMinutes,
        name
    } = errorState

    const handleError = (name, text) => {
        setErrorState((prevState)=>{
            return{
                ...prevState,
                [name]: text
            }
        })
    }

    const setErrorFalse = (item) => {
        setErrorState((prevState) => {
            return{
                ...prevState,
                [item] : false
            }
        })
    }

    const formValidation = (e) => {
        const {name, value} = e.target
        switch (name){
            case 'course':
                if(!value)
                    handleError(name, 'Course is required');
                break;
            case 'level':
                if(!value)
                    handleError(name, 'Level is required');
                break;
            case 'year':
                if(!value)
                    handleError(name, 'Season is required');
                break;
            case 'teacher':
                if(!value)
                    handleError(name, 'Teacher is required');
                break;
            case 'weekDays':
                if(!value)
                    handleError(name, 'Id is required');
                break;
            case 'startHours':
                if(!value)
                    handleError(name, 'Required');
                if(value > 24 || value < 0)
                    handleError(name, 'Out of Range')
                break;
            case 'startMinutes':
                if(!value)
                    handleError(name, 'Required');
                if(value > 59 || value < 0)
                    handleError(name, 'Out of Range')
                break;
            case 'endHours':
                if(!value)
                    handleError(name, 'Required');
                if(value > 24 || value < 0)
                    handleError(name, 'Out of Range')
                break;
            case 'endMinutes':
                if(!value)
                    handleError(name, 'Required');
                if(value > 59 || value < 0)
                    handleError(name, 'Out of Range')
                break;
            case 'name':
                if(!value)
                    handleError(name, 'Name is required');
                break;
            default:
                break;
        }

    }

    const handleAddClassroomModal = (visible) => {       
        setAddClassroomModal(visible)
        setClassroomData({})
        setErrorState({})
    }
    const handleEditClassroom = (value) => {
        setEditClassroomModal(value)

    }
    const openSecondModal = (value) => {
        if(
            course === false &&
            level === false &&
            teacher === false &&
            year === false &&
            weekDays === false &&
            startHours === false &&
            startMinutes === false &&
            endHours === false &&
            endMinutes === false && 
            name === false
        ){
            setAddStudentsModal(value)
        }else {
            if(course !== false)
                handleError('course', 'Course is required')
            if(level !== false)
                handleError('level', 'Level is required')
            if(teacher !== false)
                handleError('teacher', 'Teacher is required')
            if(year !== false)
                handleError('year', 'Season is required')
            if(weekDays !== false)
                handleError('weekDays', 'Select schedule days')
            if(startHours !== false)
                handleError('startHours', 'Required')
            if(startMinutes !== false)
                handleError('startMinutes', 'Required')
            if(endHours !== false)
                handleError('endHours', 'Required')
            if(endMinutes !== false)
                handleError('endMinutes', 'Required')
            if(name !== false)
                handleError('name', 'Name is Required')
        }
    }
    
    const handleChangeSelector = (e, data) => {
        const {name,value} = data
        if(name == 'year'){
            setSelectedYear(value)
            setErrorFalse(name)
        }else{
            setErrorFalse(name)
            setClassroomData((prevState) => {
                return{
                    ...prevState,
                    [name] : value
                }
            })
        }
    }

    const handleClassromInputs = (e) => {
        const {name, value} = e.target
        setErrorFalse(name)
        console.log(errorState.startHours)
        setClassroomData((prevState) => {           
            
            return{
                ...prevState,
                [name] : value
            }            
        })       
    }
    const submitEditData = () => {
        console.log(classroomData)
    }
    const handleSubmit = () => {
        checkedArray.map(selectedStudent => {
            studentsList.map(student =>{
                if(student.id === selectedStudent.id){
                    student.level = classroomData.level
                    student.assignedClass = classroomData.name
                    student.course = classroomData.course
                }
            })
            semesters.map((year) => {
                year.students.map(student => {
                    if(student.id === selectedStudent.id){
                        student.level = classroomData.level
                        student.assignedClass = classroomData.name
                        student.course = classroomData.course
                    }
                })
            })
            
        })
        classroomData.students = checkedArray
        semesters.map((semester) => {
            if(semester.year == selectedYear){
                semester.classRooms.push(classroomData)                
            }
        })
        setAddStudentsModal(false)
        setAddClassroomModal(false)
        setClassroomData({})
        setCheckedArray([])       
        console.log(classroomData)
    }
    
  return (
    <ClassroomContext.Provider
        value={{
            addClassroomModal,
            classroomData,
            addStudentsModal,
            errorState,
            editClassroomModal,
            submitEditData,
            handleEditClassroom,
            openSecondModal,
            formValidation,
            handleSubmit,
            setAddStudentsModal,
            handleClassromInputs,
            handleChangeSelector,
            handleAddClassroomModal
        }}
    >
        {children}
    </ClassroomContext.Provider>
  )
}
