import React,{useContext} from 'react'
import { Menu, Icon, Table, Container, Button } from 'semantic-ui-react'
import _ from 'lodash'
import { StudentContext } from '../context/StudentContext'
import StudentsTable from '../components/StudentsTable'

export default function Students() {
  
    const studentsList = useContext(StudentContext)
      
  return (
    <Container >
      <StudentsTable studentsList={studentsList}/>
    </Container>
  )
}
