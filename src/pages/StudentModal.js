import React, {useContext} from 'react'
import { Button, Image, Modal, Form, Icon, Message} from 'semantic-ui-react'
import {StudentContext} from '../context/StudentContext'
import { monday } from '../data/scheduleData'

function StudentModal({modalVisible, onSubmit, onCancel, onOpen}) {
  const {
    semesters,
    
    modalData,
    handleUserModal,
    handleChangeModal,
    handleSubmit,
    handleChangeSelector,
    errorState,
    formValidation,
    succesErrorText,
    isSuccess,
    handleIntInputs,
    newEntry
  } = useContext(StudentContext)

  const 
    {
      name,
      lastname,
      age,
      course,
      level,
      assignedClass,
      id,
      year,
      debit
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
      onClose={onCancel}
      onOpen={onOpen}
      open={modalVisible}
    >
      <Modal.Header>
        {/* Succes Message */}
        {succesErrorText && isSuccess &&<Message icon success >
          <Icon name='check'/>
          <Message.Header>{succesErrorText}</Message.Header>
        </Message>}
        {/* Error Message */}
        {succesErrorText && !isSuccess &&<Message error>          
          <Message.Header>{succesErrorText}</Message.Header>
        </Message>}
        {modalData && modalData.name !== undefined && modalData.name + '  '}
        {modalData && modalData.lastname !== undefined && modalData.lastname}
        </Modal.Header>
      <Modal.Content image>
        <Image size='small' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description style={{width: '100%'}}>
          <Form onSubmit={handleSubmit} style={{width: '100%'}}>
            <Form.Group>
            <Form.Input
                label="ID"
                placeholder="ID"
                name='id'
                type='number'
                error={id}
                disabled={!newEntry}
                onBlur={formValidation}
                // defaultValue={studentsList.length + 1}
                value={modalData && modalData.id}
                onChange={handleIntInputs}
                width={2}
              />
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
                onBlur={formValidation}
                error={age}
                value={modalData != null ? modalData.age : ""}
                onChange={handleIntInputs}
                width={2}
              />
            </Form.Group>
            <Form.Group>
              <Form.Select
                name='course'
                placeholder='Course'
                options={courses}
                value={modalData != null ? modalData.course : ""}
                error={course}
                onBlur={formValidation}
                onChange={(e, data) => handleChangeSelector(e, data)}
                label="Course"
              />
              <Form.Select
                options={levels}
                name='level'
                placeholder="Level"
                error={level}
                onBlur={formValidation}
                value={modalData != null ? modalData.level : ""}
                onChange={(e, data) => handleChangeSelector(e, data)}
                label="Level"
              />
              <Form.Select
                options={classroomData}
                name='assignedClass'
                placeholder='Classroom'
                error={assignedClass}
                onBlur={formValidation}
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
                disabled={!newEntry}
                placeholder={0}
                error={debit}
                onBlur={formValidation}
                value={modalData != null ? modalData.debit : ""}
                onChange={handleIntInputs}
                icon={<Icon name='euro sign'/>}
                width={3}
              >
              </Form.Input>
              <Form.Select
                options={academicYears}
                name='year'
                placeholder='Season'
                value={modalData ? modalData.seaons : ''}
                error={year}
                disabled={!newEntry}
                onBlur={formValidation}
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
        <Button color='black' onClick={onCancel}>
          Cancel
        </Button>
        <Button
          content="Save"
          type='submit'
          labelPosition='right'
          icon='checkmark'
          onClick={onSubmit}
          positive
        />
      </Modal.Actions>
    </Modal>
    
  )
}

export default StudentModal