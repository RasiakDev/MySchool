import React, {useContext} from 'react'
import { Button, Image, Modal, Form, Icon} from 'semantic-ui-react'
import {StudentContext} from '../context/StudentContext'
import { monday } from '../data/scheduleData'

function StudentModal() {
  const {
    semesters,
    modalVisible,
    modalData,
    handleUserModal,
    handleChangeModal,
    handleSubmit,
    handleChangeSelector,
    errorState,
    formValidation
  } = useContext(StudentContext)

  const 
    {
      name,
      lastname,
      course,
      level,
      assignedClass,
      id,
      year
    } = errorState

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

  const academicYears = semesters.map((item) =>{
    return {
      key: item.year,
      text: item.year,
      value: item.year
    }
})
  

  return (
    <Modal
      onClose={() => handleUserModal(false)}
      onOpen={() => handleUserModal(true)}
      open={modalVisible}
    >
      <Modal.Header>{modalData ? modalData.name + ' ' + modalData.lastname : ''}</Modal.Header>
      <Modal.Content image>
        <Image size='small' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description style={{width: '100%'}}>
          <Form onSubmit={handleSubmit} style={{width: '100%'}}>
            <Form.Group>
              <Form.Input
                label="First Name"
                placeholder="Name"
                name="name"
                type='text'
                error={name}
                onBlur={formValidation}
                value={modalData != null ? modalData.name : ""}
                onChange={handleChangeModal}
                width={5}
              />
              <Form.Input
                label="Last Name"
                placeholder="Last Name"
                name='lastname'
                type='text'
                error={lastname}
                onBlur={formValidation}
                value={modalData != null ? modalData.lastname : ""}
                onChange={handleChangeModal}
                width={5}
              />
              <Form.Input
                label="Age"
                placeholder="Age"
                name='age'
                type='number'
                value={modalData != null ? modalData.age : ""}
                onChange={handleChangeModal}
                width={2}
              />
              <Form.Input
                label="ID"
                placeholder="ID"
                name='id'
                type='number'
                error={id}
                value={modalData != null ? modalData.id : ""}
                onChange={handleChangeModal}
                width={2}
              />
            </Form.Group>
            <Form.Group>
              <Form.Select
                name='course'
                placeholder='Course'
                options={courses}
                value={modalData != null ? modalData.course : ""}
                onChange={(e, data) => handleChangeSelector(e, data)}
                label="Course"
              />
              <Form.Select
                options={levels}
                name='level'
                placeholder="Level"
                value={modalData != null ? modalData.level : ""}
                onChange={(e, data) => handleChangeSelector(e, data)}
                label="Level"
              />
              <Form.Select
                options={classroomData}
                name='assignedClass'
                placeholder='Classroom'
                value={modalData != null ? modalData.assignedClass : ""}
                onChange={(e, data) => handleChangeSelector(e, data)}
                label="Classroom"
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="Debit"
                name="debit"
                type="number"
                placeholder={0}
                value={modalData != null ? modalData.debit : ""}
                onChange={handleChangeModal}
                icon={<Icon name='euro sign' />}
                width={3}
              >
              </Form.Input>
              <Form.Select
                options={academicYears}
                name='year'
                placeholder='Season'
                value={modalData ? modalData.seaons : ''}
                // defaultValue={modalData == null && modalData.seasons.length === 0  ? '' : modalData.seasons[modalData.seasons.length -1]}
                onChange={(e, data) => handleChangeSelector(e, data)}
                label="Season"
              />
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
          type='submit'
          labelPosition='right'
          icon='checkmark'
          onClick={handleSubmit}
          positive
        />
      </Modal.Actions>
    </Modal>
    
  )
}

export default StudentModal
