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
    const [checkboxValue, setCheckboxValue] = useState(false)
    const [checkedArray, setCheckedArray] = useState([])
    const [dropDownValue, setDropdownValue] = useState('')

    const [errorState, setErrorState] = useState({
        name: false,
        lastname:false,
        id: false,
        course: false,
        level: false,
        assignedClass: false,
        debit: false,
        year: false 
        
    }) 

    const formValidation = (e) => {
        const {name, value} = e.target
        switch (name) {
            case 'name':
                if(value.length < 1){
                    setErrorState((prevState)=>{
                        return{
                            ...prevState,
                            [name]: true
                        }
                    })
                }else{setErrorState((prevState)=>{
                    return{
                        ...prevState,
                        [name]: false
                    }
                })}

        
            default:
                break;
        }

        // setErrorState((prevState)=>{
        //     return{
        //         ...prevState,
        //         [name]: true
        //     }
        // })
        
    }
    const handleCheckbox = (evt, data, item) => {       
        const found = checkedArray.some((element)=> {
            return item.id == element.id
        })
        if(data.checked){
            if(!found){
                checkedArray.push(item)
            }else{
                console.log('found')
            }
        }
    }

    //show table data by year or all students list
    const updateTableData = (e, data) => {
        if(data === undefined || data === null){
            setTableData(studentsList)       
            setDropdownValue('')    
        }
        else{
            setTableData(data)
            setDropdownValue(e)
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
            //push to all students list
            studentsList.push(modalData)
            //push to selected year
            semesters.forEach((item) => {
                if(modalData.year === item.year)
                    item.students.push((modalData))
            })
        }else{
            semesters.forEach((item) => {
                //semesters list
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
                            student.seasons.push(modalData.year)
                        }    
                    }
                })
            })
            //all students list
            studentsList.forEach((student) => {
                if(student.id === modalData.id){
                    student.name = modalData.name;
                    student.lastname = modalData.lastname;
                    student.age = modalData.age;
                    student.assignedClass = modalData.assignedClass;
                    student.course = modalData.course;
                    student.debit = modalData.debit
                    student.level = modalData.level
                    student.seasons.push(modalData.year)
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
                dropDownValue,
                modalVisible,
                modalData,
                state,
                tableData,
                selectCheckBox,
                checkedArray,
                checkboxValue,
                errorState,
                formValidation,
                setCheckboxValue,
                handleCheckbox,
                setCheckedArray,
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


