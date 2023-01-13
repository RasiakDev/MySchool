import React,{useContext} from 'react'
import {  Container } from 'semantic-ui-react'
import _ from 'lodash'
import { StudentContext } from '../context/StudentContext'
import StudentsTable from '../components/StudentsTable'
import '../css/Students.css'

export default function Students() {
  
    const {studentsList} = useContext(StudentContext)
      
  return (
      <StudentsTable allStudents schoolSemester="2022 - 2023" studentsList={studentsList}/>      
  )
}
