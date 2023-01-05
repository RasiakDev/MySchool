import React,{useContext} from 'react'
import { Menu, Icon, Table, Container, Button, Segment } from 'semantic-ui-react'
import _ from 'lodash'
import { StudentContext } from '../context/StudentContext'
import StudentsTable from '../components/StudentsTable'

export default function Students() {
  
    const studentsList = useContext(StudentContext)
      
  return (
  
    <Container>
      <StudentsTable schoolSemester="2022 - 2023" studentsList={studentsList}/>
      <StudentsTable schoolSemester="Summer 2022" studentsList={studentsList}/>
      <StudentsTable schoolSemester="2021 - 2022" studentsList={studentsList}/>
      <StudentsTable schoolSemester="Summer 2021" studentsList={studentsList}/>
      <StudentsTable schoolSemester="2020 - 2021" studentsList={studentsList}/>
    </Container>
  )
}
