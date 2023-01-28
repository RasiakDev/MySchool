import React, {createContext, useState} from 'react'
import { studentsList, semesters } from '../data/studentData'
import _ from 'lodash'

export const StudentContext = createContext()

export function StudentProvider({children}) {

    const [modalVisible, setModalVisible] = useState(null)
    const [modalData, setModalData] = useState(null)
    const [newEntry, setNewEntry]  = useState(false)
    const [tableData, setTableData] = useState(studentsList)
    const [selectCheckBox, setSelectCheckbox] = useState(false)
    const [checkedArray, setCheckedArray] = useState([])

    //show table data by year or all students list
    const updateTableData = (data) => {
        if(data === undefined || data === null){
            setTableData(studentsList)                
        }
        else{
            setTableData(data)        
        }        
    }

    //Filter the students table
    const [state, dispatch] = React.useReducer(filterReducer, {
        column: null,
        data: tableData,
        direction: null,
      })
    function filterReducer(state, action) {    
        switch (action.type) {
          case 'CHANGE_SORT':
            if (state.column === action.column) {
              return {
                ...state,
                data: state.data.slice().reverse(),
                direction:
                  state.direction === 'ascending' ? 'descending' : 'ascending',
              }
            }  
            return {
              column: action.column,
              data: _.sortBy(state.data, [action.column]),
              direction: 'ascending',
            }
          default:
            throw new Error()
        }
    }
    //Set modal visible, get the input to be updated or check if input is empty to add new student
    const handleUserModal = (visible, item) => {
        setModalData(item)
        console.log(item)
        setModalVisible(visible)
        if(!item){
            setNewEntry(true)
        }
    }
    //Handle selector inputs StudentModal
    const handleChangeSelector = (e, data) => {
        const {name,value} = data
        setModalData((prevState) => {
            return{
                ...prevState,
                [name] : value
            }
        })
    }
    //Handle inputs in StudentModal
    const handleChangeModal = (e) => {
        const {name, value} = e.target
        setModalData((prevState) => {
            return{
                ...prevState,
                [name] : value
            }
        })
    }
    //Handle StudentModal submit
    const handleSubmit = () => {
        if(newEntry){
            setNewEntry(false)
            studentsList.push(modalData)
        }else{
            semesters.forEach((item) => {
                item.students.forEach((student) => {
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

            studentsList.forEach((student) => {
                if(student.id === modalData.id){
                    student.name = modalData.name;
                    student.lastname = modalData.lastname;
                    student.age = modalData.age;
                    student.assignedClass = modalData.assignedClass;
                    student.course = modalData.course;
                    student.debit = modalData.debit
                    student.level = modalData.level    
                }
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
                state,
                tableData,
                selectCheckBox,
                checkedArray,
                setSelectCheckbox,
                updateTableData,
                setTableData,
                dispatch,
                handleUserModal,
                handleChangeModal,
                handleChangeSelector,
                handleSubmit,
            }}>
            {children}
        </StudentContext.Provider>
    )
}


