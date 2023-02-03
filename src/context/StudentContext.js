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
    const [modalData, setModalData] = useState({
        name: '',
        lastname: '',
        id: 0,
        age: 0,
        course: '',
        level: '',
        assignedClass: '',
        debit: 0,
    })

    const [errorState, setErrorState] = useState({})

    const handleError = (name, text) => {
        setErrorState((prevState)=>{
            return{
                ...prevState,
                [name]: text
            }
        })
    }

    const setErrorFalse = (name) => {
        setErrorState((prevState) => {
            return{
                ...prevState,
                [name] : false
            }
        })
    }

    const formValidation = (e) => {
        const {name, value} = e.target
        switch (name) {
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
                if(value < 0 || value > 100)
                    handleError(name, "Age can be from 0 to 100")                
                break;
            case 'id':
                if(!value)
                    handleError(name, 'Id is required');
                break;
            case 'course':
                if(!value)
                    handleError(name, "Course is required")
                break;
            case 'level':
                if(!value)
                    handleError(name, "Level is Required")
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
        setErrorState({})
        setModalData(item)
        setModalVisible(visible)
        if(!visible)
            setSuccesErrorText()
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
    //Handle StudentModal submit
    const handleSubmit = () => {
        //if true submit
        if(issubmit
            && modalData.name.length !== 0
            && modalData.lastname.length !== 0
            && modalData.id.length !== 0
            && modalData.course.length !== 0
            && modalData.level.length !== 0
            && modalData.assignedClass.length !== 0
            && modalData.debit.length !== 0
            && modalData.year.length !== 0
            ){
            setSuccesErrorText("Student Added")
            //if student doesn't exist
            if(newEntry){
                setNewEntry(false)
                //push to all students list
                studentsList.push(modalData)
                //push to selected year
                semesters.forEach((item) => {
                    if(modalData.year === item.year)
                        item.students.push((modalData))
                })
            }else{ //if students exist update
                semesters.forEach((item) => {
                    //update in semesters list
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
                //update in all students list
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
            setIsSuccess(true)
            setIsSubmit(false)
            setTimeout(() => {
                setModalVisible(false)
                setSuccesErrorText()

            }, 1000)
        }else if(modalData === null || modalData === undefined){
            setIsSuccess(false)
            setSuccesErrorText("Please Fill Required Fields")
            setErrorState({
                name: true,
                lastname: true,
                id: true,
                course: true,
                level: true,
                assignedClass: true,
                debit: true,
                year: true,
                age: true
            })
        }
        else{
            if(modalData.name === undefined || modalData.name === null)
                handleError('name', 'Name is Reqiured')
            if(modalData.lastname === undefined || modalData.lastname === null)
                handleError('lastname', 'Last Name is Required')
            if(modalData.id === undefined || modalData.id === null)
                handleError('id', 'Id is Required')
            if(modalData.course === undefined || modalData.course === null)
                handleError('course', 'Course is Required')
            if(modalData.level === undefined || modalData.level === null)
                handleError('level', 'Level is Required')
            if(modalData.assignedClass === undefined || modalData.assignedClass === null)
                handleError('assignedClass', 'Classroom is  ')
            if(modalData.debit === undefined || modalData.debit === null)
                handleError('debit', 'Please insert Ammount')
            if(modalData.year === undefined || modalData.year === null)
                handleError('year', 'Season is Required')
            if(modalData.age === undefined || modalData.age === null)
                handleError('age', 'Age is Required')
            setIsSuccess(false)
            setSuccesErrorText("Please Fill Required Fields")            
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


