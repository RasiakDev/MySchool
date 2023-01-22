import React, {useContext, useState} from 'react'
import { Button, Image, Modal, Form, Icon} from 'semantic-ui-react'
import {StudentContext} from '../context/StudentContext'
import { monday } from '../data/scheduleData'

function StudentModal() {
  // const [open, setOpen] = React.useState(modalVisible)
  const {modalVisible, modalData, handleUserModal} = useContext(StudentContext)
  const [formValue, setFormValue] = useState(
    {
      name: '',
      lastname: '',
      age: 0,
      course: '',
      level: '',
      classroom: '',
      debit: 0
    })
    const {name, lastname, age, course, level, classroom, debit} = formValue
  const courses = [
    {key: 'en', text: 'English', value: 'English'},
    {key: 'it', text: 'Italian', value: 'Italian'},
    {key: 'de', text: 'German', value: 'German'}
  ]
  const levels = [
    {key: 'A1', text: 'A1', value: 'A1'},
    {key: 'A2', text: 'A2', value: 'A2'},
    {key: 'B1', text: 'B1', value: 'B1'},
    {key: 'B2', text: 'B2', value: 'B2'}
  ]
  const classroomData = monday.map((item) =>{
    return {
      key: item.id,
      text: item.name,
      value: item.name
    }
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValue((prevState) => {
      return{
        ...prevState,
        [name] : value
      }
    })
  }

  return (
    <Modal
      onClose={() => handleUserModal(false)}
      onOpen={() => handleUserModal(true)}
      open={modalVisible}
    >
      <Modal.Header>{modalData != null ? modalData.name + ' '+ modalData.lastname : ""}</Modal.Header>
      <Modal.Content image>
        <Image size='small' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description style={{width: '100%'}}>
          <Form style={{width: '100%'}}>
            <Form.Group>
              <Form.Input
                label="First Name"
                placeholder="Name"
                name="name"
                value={name}
                // value={modalData != null ? modalData.name : ""}
                onChange={handleChange}
                width={5}
              />
              <Form.Input
                label="Last Name"
                placeholder="Last Name"
                value={modalData != null ? modalData.lastname : ""}
                width={5}
              />
              <Form.Input
                label="Age"
                placeholder="Age"
                value={modalData != null ? modalData.age : ""}
                width={2}
              />
            </Form.Group>
            <Form.Group>
              <Form.Select
                options={courses}
                value={modalData != null ? modalData.course : ""}
                label="Course"
              />
              <Form.Select
                options={levels}
                value={modalData != null ? modalData.level : ""}
                label="Level"
              />
              <Form.Select
                options={classroomData}
                value={modalData != null ? modalData.assignedClass : ""}
                label="Classroom"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Debit"
                value={modalData != null ? modalData.debit : ""}
                icon={<Icon name='euro sign' />}
                width={3}
              >                
              </Form.Input>
             
            </Form.Group>
             
          </Form>
          
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          floated="left"
          content="Add Payment"
          primary
          size="medium"
        />
        <Button color='black' onClick={() => handleUserModal(false)}>
          Cancel
        </Button>
        <Button
          content="Save"
          labelPosition='right'
          icon='checkmark'
          onClick={() => handleUserModal(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default StudentModal
