import React, {createContext, useState} from 'react'
import { studentsList, semesters } from '../data/studentData'
import _ from 'lodash'

export const StudentContext = createContext()

export function StudentProvider({children}) {

    const [modalVisible, setModalVisible] = useState(null)
    
    const [newEntry, setNewEntry]  = useState(false)
    const [tableData, setTableData] = useState(studentsList)
    const [selectCheckBox, setSelectCheckbox] = useState(false)
    const [checkboxValue, setCheckboxValue] = useState(false)
    const [checkedArray, setCheckedArray] = useState([])
    const [dropDownValue, setDropdownValue] = useState('')
    const [issubmit, setIsSubmit] = useState(false)
    const [succesErrorText, setSuccesErrorText] = useState()
    const [isSuccess, setIsSuccess] = useState(false)  
    const [modalData, setModalData] = useState({})    
  
    const [errorState, setErrorState] = useState({
        name: false,
        lastname: false,
        age: false
    })
    const {name, lastname, age} = errorState
    const checkIfExists = (name, val) => {
        studentsList.forEach((item) => {
            if(val == item.id)
                handleError(name, "Id is busy")
        })
    }

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
        switch (name) {
            case 'id':
                if(!value)
                    handleError(name, 'Id is required');
                if(value <0 || isNaN(value))
                    handleError(name, 'Id not correct')
                checkIfExists(name, value)
                break;
            case 'name':
                if(!value)
                    handleError(name, 'Name is required')
                if(value.length >= 25)
                    handleError(name, 'Max 25 characters')
                break;
            case 'lastname':
                if(!value)
                    handleError(name, 'Last Name is required')
                if(value.length >= 25)
                    handleError(name, 'Max 25 characters')
                break;
            case 'age':
                if(!value || isNaN(value))
                    handleError(name, 'Age is required')
                if(value < 0 || value > 100)
                    handleError(name, "Age can be from 0 to 100")
                break;
            case 'course':
                if(!value)
                    handleError(name, "Course is required")
                break;
            case 'level':
                if(!value)
                    handleError(name, "Level is Required")
                break
            case 'debit':
                if(!value || isNaN(value))
                    handleError(name, "Insert Ammount")
                break
            default:
                break;
        }
        if(errorState.lastname == false && errorState.name == false){
            setIsSubmit(true)
        }else{
            setIsSubmit(false)
        }
    }

    const handleCheckbox = (evt, data, item) => {
        //returns true or false if item exist 
        // const found = checkedArray.some((element)=> {
        //     return item.id == element.id
        // })
        if(data.checked){            
                checkedArray.push(item)            
        }else{
            setCheckedArray(current => current.filter((student => student.id != item.id)))
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
        setErrorState({})
        setModalData(item)
        setModalVisible(visible)
        if(!visible)
            setSuccesErrorText()
            setNewEntry(false)
        if(!item){
            setNewEntry(true)
        }
    }
    //Handle selector inputs StudentModal
    const handleChangeSelector = (e, data) => {
        const {name,value} = data
        setIsSubmit(false)
        setErrorFalse(name)
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
        setIsSubmit(false)
        setErrorFalse(name)
        setModalData((prevState) => {           
            return{
                ...prevState,
                [name] : value
            }            
        })        
    }

    //Handle int inputs
    const handleIntInputs = (e) => {
        const {name, value} = e.target
        setIsSubmit(false)
        setErrorFalse(name)
        setModalData((prevState) => {           
            return{
                ...prevState,
                [name] : parseInt(value)
            }            
        })
    }


    //Handle StudentModal submit
    const handleSubmit = () => {
        console.log(name, lastname, age)
        //UPDATE EXISTING STUDENT
        if(newEntry === false && modalData.name.length !== 0 && modalData.lastname.length !== 0 && modalData.age.length !== 0){
            //update in semesters list
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
                            // student.seasons.push(modalData.year)
                        }else{
                            setModalVisible(false);
                            console.log('nothing changed');
                        }
                    }
                })
            })
            //update in all students list
            studentsList.forEach((student) => {
                if(student.id === modalData.id){
                    if(student !== modalData){
                        student.name = modalData.name;
                        student.lastname = modalData.lastname;
                        student.age = modalData.age;
                        student.assignedClass = modalData.assignedClass;
                        student.course = modalData.course;
                        student.debit = modalData.debit
                        student.level = modalData.level
                        // student.seasons.push(modalData.year)
                    }else{
                        setModalVisible(false);
                        console.log('nothing changed');
                    }
                }
            })
            setIsSuccess(true)
            setIsSubmit(false)
            setModalData({})
            setSuccesErrorText("Student Updated")
            setTimeout(() => {
                setModalVisible(false)
                setSuccesErrorText()

            }, 1000)
            console.log("not new entry")
            //NEW REGISTATION
        }else if(issubmit
            && newEntry
            && errorState.id === false
            && errorState.name === false
            && errorState.lastname === false
            && errorState.course === false
            && errorState.level === false
            && errorState.assignedClass === false
            && errorState.debit === false
            && errorState.year === false
            && errorState.age === false
            ){
            setSuccesErrorText("Student Added")
            //if student doesn't exist
            setNewEntry(false)
            //push to all students list
            studentsList.push(modalData)
            //push to selected year
            semesters.forEach((item) => {
                if(modalData.year === item.year)
                    item.students.push((modalData))
            })
            setModalData({})
            setIsSuccess(true)
            setIsSubmit(false)
            setModalData({})
            setTimeout(() => {
                setModalVisible(false)
                setSuccesErrorText()
            }, 1000)
            console.log("new entry")
        }else if(modalData === null || modalData === undefined){
            setIsSuccess(false)
            setSuccesErrorText("Please Fill Required Fields")
            setErrorState({
                id: true,
                name: true,
                lastname: true,
                age: true,
                course: true,
                level: true,
                assignedClass: true,
                debit: true,
                year: true
            })
            console.log("All null")
        }else{
            if(modalData.id === undefined || modalData.id === null)
                handleError('id', 'Id is Required')
            if(modalData.name === undefined || modalData.name === null)
                handleError('name', 'Name is Reqiured')
            if(modalData.lastname === undefined || modalData.lastname === null)
                handleError('lastname', 'Last Name is Required')
            if(modalData.course === undefined || modalData.course === null)
                handleError('course', 'Course is Required')
            if(modalData.level === undefined || modalData.level === null)
                handleError('level', 'Level is Required')
            if(modalData.assignedClass === undefined || modalData.assignedClass === null)
                handleError('assignedClass', 'Classroom is Required')
            // if(modalData.debit === undefined || modalData.debit === null)
            //     handleError('debit', 'Please insert Ammount')
            // if(modalData.year === undefined || modalData.year === null)
            //     handleError('year', 'req')
            if(modalData.age === undefined || modalData.age === null)
                handleError('age', 'Age is Required')
            setIsSuccess(false)
            setSuccesErrorText("Please Fill Required Fields")            
            console.log("Last else")
        }
    }

    return (
        <StudentContext.Provider 
            value={{
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
                issubmit,
                succesErrorText,
                isSuccess,
                newEntry,
                handleIntInputs,
                setSuccesErrorText,
                setErrorState,
                setIsSubmit,
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