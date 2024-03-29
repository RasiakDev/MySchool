import React, {useContext, useState} from 'react'
import { Form, Modal, Button, Icon } from 'semantic-ui-react'
import StudentsTable from '../components/StudentsTable'
import { ClassroomContext } from '../context/ClassroomContext'
import { SemestersContext } from '../context/SemestersContext'
import StudentModal from './StudentModal'


export default function AddClassroomModal({visible, onOpen, onClose, editData}) {
    const { semesters} = useContext(SemestersContext)

    const {
      classroomData,
      submitEditData,
      handleAddClassroomModal,
      handleClassromInputs,
      handleChangeSelector,
      setAddStudentsModal,
      addStudentsModal,
      handleSubmit,
      errorState,
      formValidation,
      openSecondModal
    } = useContext(ClassroomContext)

    const {
      course,
      level,
      teacher,
      year,
      weekDays,
      startHours,
      startMinutes,
      endHours,
      endMinutes,
      name

    } = errorState
    const courses = [
        {key: 'en', text: 'English', value: 'English'},
        {key: 'it', text: 'Italian', value: 'Italian'},
        {key: 'de', text: 'German', value: 'German'}
      ]

      const teachers = [
        {key: 1, text: 'Indrit', value: 'indrit'},
        {key: 2, text: 'Elton', value: 'elton'},
        {key: 3, text: 'Brisejda', value: 'Brisejda'}
      ]

      const levels = [
        {key: 'A1', text: 'A1', value: 'A1'},
        {key: 'A2', text: 'A2', value: 'A2'},
        {key: 'B1', text: 'B1', value: 'B1'},
        {key: 'B2', text: 'B2', value: 'B2'}
      ]

      const daySelection = [
        {key: 'monday', text: 'Monday', value: 'monday'},
        {key: 'tuesday', text: 'Tuesday', value: 'tuesday'},
        {key: 'wednesday', text: 'Wednesday', value: 'wednesday'},
        {key: 'thursday', text: 'Thursday', value: 'thursday'},
        {key: 'friday', text: 'Friday', value: 'friday'},
        {key: 'saturday', text: 'Saturday', value: 'saturday'},
        {key: 'sunday', text: 'Sunday', value: 'sunday'}
      ]
      const seasons = semesters.map((item) =>{
        return {
          key: item.id,
          text: item.year,
          value: item.year
        }
      })
  return (
    <>
    <Modal
        open={visible}
        onOpen={onOpen}
        onClose={onClose}
        style={{padding: 20}}
    >
        <Form>
            <Form.Select
              placeholder='Course'
              label="Course"
              name='course'
              options={courses}
              value={editData ? editData.course : classroomData.course}
              onChange={(e, data) => handleChangeSelector(e, data)}
              error={course}
              onBlur={formValidation}
            />
            <Form.Select
              placeholder='Level'
              label="Level"
              name='level'
              options={levels}
              onChange={(e, data) => handleChangeSelector(e, data)}
              value={editData ? editData.level :classroomData.level}
              error={level}
              onBlur={formValidation}

            />
            { !editData && (<Form.Select
              placeholder='Season'
              label="Season"
              name='year'
              options={seasons}
              onChange={(e, data) => handleChangeSelector(e, data)}
              value={editData ? editData.season :classroomData.year}
              error={year}
              onBlur={formValidation}
            />)}
            <Form.Select
              placeholder='Teacher'
              label="Teacher"
              name='teacher'
              options={teachers}
              onChange={(e, data) => handleChangeSelector(e, data)}
              value={editData ? editData.teacher : classroomData.teacher}
              error={teacher}
              onBlur={formValidation}
            />
            <Form.Select
              multiple
              placeholder='Days'
              label="Select daily Schedule"
              name='weekDays'
              options={daySelection}
              onChange={(e, data) => handleChangeSelector(e, data)}
              value={editData ? editData.weekDays : classroomData.weekDays}
              error={weekDays}
              onBlur={formValidation}
            />
            <Form.Group
              style={{ width: '100%', display: 'flex', flexDirection: 'horisontal'}}
            > 
            <div style={{width: '30%',  marginLeft: -47}}>
              <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                <h5>Starting hour</h5>
              </div>
              <div style={{display: 'flex', width: '100%', justifyContent:'center'}}>
                <Form.Input
                  placeholder="00"
                  required={true}
                  type='number'
                  name='startHours'
                  defaultValue={editData && editData.startHours}
                  width={5}
                  onChange={handleClassromInputs}
                  error={startHours}
                  onBlur={formValidation}
                  
                />
                <div style={{display:'flex', alignItems: 'center'}}>:</div>
                <Form.Input
                  type='number'
                  name='startMinutes'
                  placeholder='00'
                  width={5}
                  onChange={handleClassromInputs}
                  defaultValue={editData && editData.startMinutes}
                  error={startMinutes}
                  onBlur={formValidation}
                />
              </div>
            </div>
            
            <div style={{width: '30%',  marginLeft: -80}}>
              <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                <h5>Ending Hour</h5>
              </div>
              <div style={{display: 'flex', width: '100%', justifyContent:'center'}}>
                <div style={{display:'flex', alignItems: 'center', marginRight: 8}}> - </div>
                <Form.Input
                  placeholder="00"
                  required={true}
                  type='number'
                  name='endHours'
                  width={5}
                  defaultValue={editData && editData.endHours}
                  onChange={handleClassromInputs}
                  error={endHours}
                  onBlur={formValidation}
                />
                <div style={{display:'flex', alignItems: 'center'}}>:</div>
                <Form.Input
                  type='number'
                  name='endMinutes'
                  placeholder='00'
                  width={5}
                  onChange={handleClassromInputs}
                  defaultValue={editData && editData.endMinutes}
                  error={endMinutes}
                  onBlur={formValidation}
                />
              </div>
            </div>
            </Form.Group>
            <Form.Input
              name='name'
              placeholder="Classroom Name"
              onChange={handleClassromInputs}
              defaultValue={editData && editData.name}
              value={classroomData.name}
              error={name}
              onBlur={formValidation}
            />
        </Form>
        {editData ? 
          (<Button 
            icon 
            primary 
            labelPosition='right'
            style={{marginTop: 30}}
            floated='right'
            onClick={() => submitEditData()}
          >
            Save
            <Icon name='save outline'/>
          </Button>)
          :
          (<Button
          icon 
          primary 
          labelPosition='right'
          style={{marginTop: 30}}
          floated='right'
          onClick={() => openSecondModal(true)}
          >
            Select Students
            <Icon name='right arrow'/>
          </Button>)
        }
    </Modal>
    <Modal 
      open={addStudentsModal}
      onOpen={() => setAddStudentsModal(true)}
      onClose={() => setAddStudentsModal(false)}
    >
      <StudentsTable/>
      <Button onClick={() => setAddStudentsModal(false)} floated='right'>Cancel</Button>
      <Button onClick={handleSubmit} floated='right'>Save</Button>
    </Modal>
    </>
  )
}
