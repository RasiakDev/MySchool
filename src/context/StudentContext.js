import React, {createContext, useState} from 'react'
import { studentsList, semesters } from '../data/studentData'

export const StudentContext = createContext()



export function StudentProvider({children}) {
    const [modalVisible, setModalVisible] = useState(null)
    const [modalData, setModalData] = useState(null)
    const [modalDataCopy, setModalDataCopy] = useState()

    const handleUserModal = (visible, item) => {
        setModalData(item)
        setModalVisible(visible)
        setModalDataCopy(item)
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
    const handleSubmit = () => {
        semesters.map((item) => {
            item.students.map((student) => {
                if(student.id == modalData.id)
                    student.name = modalData.name;
                    student.lastname = modalData.lastname;
                    student.age = modalData.age;
                    student.assignedClass = modalData.assignedClass;
                    student.course = modalData.course;
                    student.debit = modalData.debit
                    student.level = modalData.lastname
            })
            console.log(semesters)
        })
        setModalVisible(false)
    }
    return (
        <StudentContext.Provider 
            value={{
                studentsList, 
                semesters,
                modalVisible,
                modalData,
                modalDataCopy,
                handleUserModal,
                handleChangeModal,
                handleSubmit
            }}>
            {children}
        </StudentContext.Provider>
    )
}


