import React from 'react'
import { Menu, Icon, Table, Container, Button } from 'semantic-ui-react'
import _ from 'lodash'

const lista = [
    {
        "id": 1,
        'name': 'Besmir',
        'lastname': 'Guma',
        'age': 27,
        'course': 'English',
        'level': 'B2',
        'assignedClass': 'Anglisht B1 Etoni'
    },
    {
        "id": 2,
        'name': 'Ensuela',
        'lastname': 'Germenji',
        'age': 27,
        'course': 'English',
        'level': 'B2',
        'assignedClass': 'Anglisht B2 Inriti'
    },
    {
        "id": 3,
        'name': 'Gezim',
        'lastname': 'Guma',
        'age': 28,
        'course': 'English',
        'level': 'A2',
        'assignedClass': 'Anglisht B1 Brisejda'
    },       
  ]

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
export default function Students() {
  const [state, dispatch] = React.useReducer(filterReducer, {
    column: null,
    data: lista,
    direction: null,
  })
  const { column, data, direction } = state

      
  return (
    <Container >
      <Table  sortable fixed celled>
        {/* -----------------TABLE HEADER------------------------ */}
        <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            sorted={column === 'name' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}          >
            <h4>Name</h4>
          </Table.HeaderCell>
          <Table.HeaderCell
            textAlign='center'
            sorted={column === 'age' ? direction : null}
            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'age' })} 
          >
              <h4>Age</h4>
          </Table.HeaderCell>
          <Table.HeaderCell textAlign='center'><h4>Course</h4></Table.HeaderCell>
          <Table.HeaderCell textAlign='center'><h4>Level</h4></Table.HeaderCell>          
          <Table.HeaderCell><h4>Classroom</h4></Table.HeaderCell>          
          <Table.HeaderCell textAlign='center'><h4>Edit</h4></Table.HeaderCell>          
        </Table.Row>
        </Table.Header>
        {/* -----------------TABLE BODY------------------------ */}
        <Table.Body>
        {lista.map((item) => (
          <Table.Row key={item.id}>
              <Table.Cell><p>{item.name} {item.lastname}</p></Table.Cell>
              <Table.Cell textAlign='center'><p>{item.age}</p></Table.Cell>
              <Table.Cell textAlign='center'><p>{item.course}</p></Table.Cell>
              <Table.Cell textAlign='center'><p>{item.level}</p></Table.Cell>
              <Table.Cell ><p>{item.assignedClass}</p></Table.Cell>
              <Table.Cell textAlign='center'><Icon onClick={() => console.log("click")} name='edit'/></Table.Cell>
          </Table.Row>
        ))}
        </Table.Body>        
        {/* -----------------TABLE FOOTER------------------------ */}
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='6'>            
              <Menu floated='left' pagination>
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
    </Container>
)




  
}
