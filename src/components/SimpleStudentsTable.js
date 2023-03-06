import React, {useContext} from 'react'
import { Menu, Icon, Table, Button, Checkbox,Modal} from 'semantic-ui-react'
import '../css/Students.css'
import YearPicker from './YearPicker'
import StudentModal from '../pages/StudentModal'
import { StudentContext } from '../context/StudentContext'
import { SemestersContext } from '../context/SemestersContext'
import StudentsTable from './StudentsTable'

export default function SimpleStudentsTable({data}) {
  const {
    handleUserModal,
    updateTableData,
    tableData,
    state,
    dispatch,
    handleCheckbox,
    selectCheckBox,
    

  } = useContext(StudentContext)
  const { column, direction } = state

  const {
    handleAddStudentInClassroomModal,
    addStudentVisible,
    addStudentInClassroom,
  } = useContext(SemestersContext)

  return (
    <>
      {/* <StudentModal
        modalVisible={addStudentVisible}
        onSubmit={() => addStudentInClassroom()}
        onCancel={() => handleAddStudentInClassroomModal(false)}
        onOpen={() => handleAddStudentInClassroomModal(true)}
      /> */}
      
      <Table selectable sortable celled>
        {/* -----------------TABLE HEADER------------------------ */}
        <Table.Header>
          <Table.Row>
           {!selectCheckBox && <Table.HeaderCell/>}
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
            {!selectCheckBox &&<Table.HeaderCell
              textAlign='center'
            >
              <h4>Pay</h4>
            </Table.HeaderCell>}
          </Table.Row>
        </Table.Header>
        {/* -----------------TABLE BODY------------------------ */}
        <Table.Body>
          {data.map((item, index) => (
          <Table.Row key={index} onClick={() => {selectCheckBox && handleUserModal(true, item)}}>
              {!selectCheckBox &&
              <Table.Cell className='checkbox' collapsing>
                <Checkbox onChange={(event, data) => handleCheckbox(event, data, item)}/>
              </Table.Cell>}
              <Table.Cell><p>{item.id}</p></Table.Cell>
              <Table.Cell><p>{item.name} {item.lastname}</p></Table.Cell>
              <Table.Cell textAlign='center'><p>{item.age}</p></Table.Cell>
              <Table.Cell textAlign='center'><p>{item.course}</p></Table.Cell>
              <Table.Cell textAlign='center'><p>{item.level}</p></Table.Cell>
              <Table.Cell ><p>{item.assignedClass}</p></Table.Cell>
              <Table.Cell textAlign='center' ><p>{item.debit}</p></Table.Cell>
              {!selectCheckBox && <Table.Cell onClick={() => console.log("click")} textAlign='center'><Icon  name='edit'/></Table.Cell>}
          </Table.Row>
        ))}
        </Table.Body>        
        {/* -----------------TABLE FOOTER------------------------ */}
        <Table.Footer>
          <Table.Row verticalAlign='middle'>
            <Table.HeaderCell colSpan={!selectCheckBox ? '9' : '8'}>
                <Button
                type='submit'
                onClick={() => handleAddStudentInClassroomModal(true)}
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
      <Modal
        onOpen={() => handleAddStudentInClassroomModal(true)}
        onClose={() => handleAddStudentInClassroomModal(false)}
        open={addStudentVisible}
        style={{padding: 20}}
      >
        <StudentsTable/>
          <Button 
            positive
            floated='right'
            onClick={addStudentInClassroom}
          >
            Save
          </Button>
      </Modal>
    </>
  )
}