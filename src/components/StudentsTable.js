import React,{useState} from 'react'
import { Menu, Icon, Table, Button } from 'semantic-ui-react'
import _ from 'lodash'
import {colors} from '../config/colors'
import '../css/Students.css'

//---------------TABLE FILTER-------------------------//
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

//Table header style
const tableHeader = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'teal',
  borderRadius: 3,
  verticalAlign: 'center'
  
}
export default function Students({studentsList, schoolSemester}) {
  const [state, dispatch] = React.useReducer(filterReducer, {
    column: null,
    data: studentsList,
    direction: null,
  })
  const { column, data, direction } = state

  return (  
      <Table selectable sortable celled>
        {/* -----------------TABLE HEADER------------------------ */}
        <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            width={2}
            sorted={column === 'id' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'id' })}
          >
            <h4>Nr. Amze</h4>
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'name' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
          >
            <h4>Name</h4>
          </Table.HeaderCell>
          <Table.HeaderCell
            textAlign='center'
            sorted={column === 'age' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'age' })} 
          >
              <h4>Age</h4>
          </Table.HeaderCell>
          <Table.HeaderCell 
            sorted={column === 'course' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'course' })}
            textAlign='center'
          >
              <h4>Course</h4>
          </Table.HeaderCell>
          <Table.HeaderCell
            sorted={column === 'level' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'level' })}
            textAlign='center'
          >
              <h4>Level</h4>
          </Table.HeaderCell>          
          <Table.HeaderCell
            sorted={column === 'classroom' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'classroom' })}
          >
            <h4>Classroom</h4>
          </Table.HeaderCell>          
          <Table.HeaderCell
            textAlign='center'
          >
            <h4>Edit</h4>
          </Table.HeaderCell>          
        </Table.Row>
        </Table.Header>
        {/* -----------------TABLE BODY------------------------ */}
        <Table.Body>
        {data.map(({id, name, lastname, age, course, level, assignedClass}) => (
          <Table.Row key={id}>
              <Table.Cell><p>{id}</p></Table.Cell>
              <Table.Cell><p>{name} {lastname}</p></Table.Cell>
              <Table.Cell textAlign='center'><p>{age}</p></Table.Cell>
              <Table.Cell textAlign='center'><p>{course}</p></Table.Cell>
              <Table.Cell textAlign='center'><p>{level}</p></Table.Cell>
              <Table.Cell ><p>{assignedClass}</p></Table.Cell>
              <Table.Cell onClick={() => console.log("click")} textAlign='center'><Icon  name='edit'/></Table.Cell>
          </Table.Row>
        ))}
        </Table.Body>        
        {/* -----------------TABLE FOOTER------------------------ */}
        <Table.Footer>
          <Table.Row verticalAlign='middle'>
            <Table.HeaderCell colSpan='7'>            
              <Menu pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item>1</Menu.Item>
                <Menu.Item>2</Menu.Item>
                <Menu.Item>3</Menu.Item>
                <Menu.Item>4</Menu.Item>
                <Menu.Item icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
              <Button
                icon
                labelPosition='left'
                floated='right'
                primary>
                  <Icon name='user'/>
                  Add Student
                </Button>            
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
  )
}
