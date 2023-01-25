import React, {createContext, useState, useRef} from 'react'
import { studentsList, semesters } from '../data/studentData'

export const StudentContext = createContext()



export function StudentProvider({children}) {
    const [modalVisible, setModalVisible] = useState(null)
    const [modalData, setModalData] = useState(null)
    const [newEntry, setNewEntry]  = useState(false)

    const handleUserModal = (visible, item) => {
        setModalData(item)
        setModalVisible(visible)
        if(!item){
            setNewEntry(true)
        }
    }
    const handleChangeSelector = (e, data) => {
        const {name,value} = data
        setModalData((prevState) => {
            return{
                ...prevState,
                [name] : value
            }
        })
    }

    const handleChangeModal = (e) => {
        const {name, value} = e.target
        setModalData((prevState) => {
            return{
                ...prevState,
                [name] : value
            }
        })
    }

    const addNewStudent = () => {        
        setNewEntry(false)
        studentsList.push(modalData)
        console.log(studentsList)
    }

    const handleSubmit = () => {
        if(newEntry){
            addNewStudent()
        }else{
            semesters.map((item) => {
                item.students.map((student) => {
                    if(student.id === modalData.id){
                        if(student !== modalData){
                            student.name = modalData.name;
                            student.lastname = modalData.lastname;
                            student.age = modalData.age;
                            student.assignedClass = modalData.assignedClass;
                            student.course = modalData.course;
                            student.debit = modalData.debit
                            student.level = modalData.level                    
                        }    
                    }
                })
            })
        }
        setModalVisible(false)
    }
    return (
        <StudentContext.Provider 
            value={{
                studentsList, 
                semesters,
                modalVisible,
                modalData,              
                handleUserModal,
                handleChangeModal,
                handleChangeSelector,
                handleSubmit,
            }}>
            {children}
        </StudentContext.Provider>
    )
}


