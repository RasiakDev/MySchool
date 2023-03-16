import React, {createContext, useContext, useState, useEffect} from 'react'
import { StudentContext } from './StudentContext'
import { semesters } from '../data/studentData'

export const ClassroomContext = createContext()
export function ClassroomProvider({children}) {

    const [addClassroomModal, setAddClassroomModal] = useState(false)
    const [addStudentsModal, setAddStudentsModal] = useState(false)
    const {checkedArray, setCheckedArray} = useContext(StudentContext)
    const [classroomData, setClassroomData] = useState({})
    const [selectedYear, setSelectedYear] = useState()

    useEffect(() => {
        setClassroomData((prevState) => {
            return{
                ...prevState,
                'students': checkedArray
            }
        })
    },[checkedArray])

    const handleAddClassroomModal = (visible) => {       
        setAddClassroomModal(visible)
    }
    
    const handleSubmit = () => {
        
        semesters.map((semester) => {
            if(semester.year == selectedYear){
                semester.classRooms.push(classroomData)                
            }
        })
        setAddStudentsModal(false)
        setAddClassroomModal(false)
        setClassroomData({})
        setCheckedArray([])
        
    }
    const handleChangeSelector = (e, data) => {
        const {name,value} = data
        // setIsSubmit(false)
        // setErrorFalse(name)
        if(name == 'year'){
            setSelectedYear(value)
        }else{
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
        // setIsSubmit(false)
        // setErrorFalse(name)
        setClassroomData((prevState) => {           
            
            return{
                ...prevState,
                [name] : value
            }            
        })       
    }
    
  return (
    <ClassroomContext.Provider
        value={{
            addClassroomModal,
            classroomData,
            addStudentsModal,
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
