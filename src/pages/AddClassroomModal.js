import React, {useContext} from 'react'
import { Form, Modal } from 'semantic-ui-react'
import { SemestersContext } from '../context/SemestersContext'


export default function AddClassroomModal({visible}) {
    const {handleAddClassroomModal, semesters} = useContext(SemestersContext)

    const courses = [
        {key: 'en', text: 'English', value: 'English'},
        {key: 'it', text: 'Italian', value: 'Italian'},
        {key: 'de', text: 'German', value: 'German'}
      ]

      const teachers = [
        {key: 1, text: 'Indrit', value: 'indrit'},
        {key: 1, text: 'Elton', value: 'elton'},
        {key: 1, text: 'Brisejda', value: 'Brisejda'}
      ]

      const levels = [
        {key: 'A1', text: 'A1', value: 'A1'},
        {key: 'A2', text: 'A2', value: 'A2'},
        {key: 'B1', text: 'B1', value: 'B1'},
        {key: 'B2', text: 'B2', value: 'B2'}
      ]

      const weekDays = [
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
    <Modal
        open={visible}
        onClose={() => handleAddClassroomModal(false)}
        onOpen={() => handleAddClassroomModal(true)}
        style={{padding: 20}}
    >
        <Form>
            <Form.Select
              placeholder='Course'
              label="Course"
              options={courses}
            />
            <Form.Select
              placeholder='Level'
              label="Level"
              options={levels}
            />
            <Form.Select
              placeholder='Season'
              label="Season"
              options={seasons}
            />
            <Form.Select
              placeholder='Teacher'
              label="Teacher"
              options={teachers}
            />
            <Form.Select
              multiple
              placeholder='Days'
              label="Select daily Schedule"
              options={weekDays}
            />
            <Form.Group
              style={{display: 'flex'}}
            >
              <Form.Input
                fluid
                placeholder="00"
                required={true}
                type='number'
              />
              :
              <Form.Input
                type='number'
              />
            </Form.Group>
            <Form.Input placeholder="Classroom Name"/>
        </Form>
    </Modal>
  )
}
