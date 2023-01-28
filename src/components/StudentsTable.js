import React, {useContext} from 'react'
import { Menu, Icon, Table, Button, Checkbox } from 'semantic-ui-react'
import '../css/Students.css'
import YearPicker from './YearPicker'
import StudentModal from '../pages/StudentModal'
import { StudentContext } from '../context/StudentContext'
import { SemestersContext } from '../context/SemestersContext'

export default function StudentsTable() {
  const {
    handleUserModal,
    updateTableData,
    tableData,
    state,
    dispatch,
    checkedArray,
    setCheckedArray,
    selectCheckBox,
    setSelectCheckbox

  } = useContext(StudentContext)
  const { column, direction } = state

  return (
    <>
      <Button onClick={() => updateTableData()}>All Students</Button>
      <YearPicker/>
      <Checkbox
          checked={selectCheckBox}
          onChange={() => setSelectCheckbox(val => !val)}
          style={{float: 'right'}}
          toggle
          label={selectCheckBox ? "Enter in Edit Mode" : 'Enter in Select Mode'}
          
      />
      <StudentModal />
      <Table selectable sortable celled>
        {/* -----------------TABLE HEADER------------------------ */}
        <Table.Header>
          <Table.Row>
           {selectCheckBox && <Table.HeaderCell/>}
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
              sorted={column === 'debit' ? direction : null}
              textAlign="center"
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'debit' })}
            >
              <h4>Debit</h4>
            </Table.HeaderCell>
            <Table.HeaderCell
              textAlign='center'
            >
              <h4>Pay</h4>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {/* -----------------TABLE BODY------------------------ */}
        <Table.Body>
          {tableData.map((item, key) => (
          <Table.Row key={key} onClick={() => {!selectCheckBox && handleUserModal(true, item)}}>
              {selectCheckBox &&
              <Table.Cell className='checkbox' collapsing>
                <Checkbox onChange={() => {checkedArray.push(item); console.log(checkedArray)} }/>
              </Table.Cell>}
              <Table.Cell><p>{item.id}</p></Table.Cell>
              <Table.Cell><p>{item.name} {item.lastname}</p></Table.Cell>
              <Table.Cell textAlign='center'><p>{item.age}</p></Table.Cell>
              <Table.Cell textAlign='center'><p>{item.course}</p></Table.Cell>
              <Table.Cell textAlign='center'><p>{item.level}</p></Table.Cell>
              <Table.Cell ><p>{item.assignedClass}</p></Table.Cell>
              <Table.Cell textAlign='center' ><p>{item.debit}</p></Table.Cell>
              <Table.Cell onClick={() => console.log("click")} textAlign='center'><Icon  name='edit'/></Table.Cell>
          </Table.Row>
        ))}
        </Table.Body>        
        {/* -----------------TABLE FOOTER------------------------ */}
        <Table.Footer>
          <Table.Row verticalAlign='middle'>
            <Table.HeaderCell colSpan={selectCheckBox ? '9' : '8'}>
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
                type='submit'
                onClick={() => handleUserModal(true)}
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
    </>
  )
}