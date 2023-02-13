import React, {useContext} from 'react'
import { Container, Modal } from 'semantic-ui-react'
import { SemestersContext } from '../context/SemestersContext'

export default function ViewClassroomModal() {
    const {
        viewClassroomModal,
        handleViewClassroomModal,
        selectedClassroom
    } = useContext(SemestersContext)
  return (
    <Modal
        open={viewClassroomModal}
        onOpen={() => handleViewClassroomModal(true)}
        onClose={() => handleViewClassroomModal(false)}
        size='small'
        
    >
        {selectedClassroom && 
        (<Container style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h3>Course: {selectedClassroom.course}</h3>
            <h3>Name: {selectedClassroom.name}</h3>
            <h3>Schedule: {selectedClassroom.startingHour + ' - ' + selectedClassroom.endingHour}</h3>
            <h3>Teacher: {selectedClassroom.teacher}</h3>
        </Container>)
        }

    </Modal>
  )
}
