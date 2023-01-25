import React,{useContext, useState} from 'react'
import { Dropdown } from 'semantic-ui-react'
import { StudentContext } from '../context/StudentContext'
import StudentsTable from '../components/StudentsTable'
import '../css/Students.css'

export default function Students() {
  
    const {semesters, studentsList} = useContext(StudentContext)
    const [tableData, setTableData] = useState(studentsList)
      
  return (
    <div>      
      <StudentsTable studentsList={tableData}/>
    </div>
  )
}
