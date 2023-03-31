import React, {useContext} from 'react'
import { Container, Form, Icon, Modal, Segment } from 'semantic-ui-react'
import { SemestersContext } from '../context/SemestersContext'
import SimpleStudentsTable from '../components/SimpleStudentsTable'
import { ClassroomContext } from '../context/ClassroomContext'
import AddClassroomModal from './AddClassroomModal'

export default function ViewClassroomModal() {
    const {
        viewClassroomModal,
        handleViewClassroomModal,
        selectedClassroom
    } = useContext(SemestersContext)

    const {
        editClassroomModal,
        handleEditClassroom
    } = useContext(ClassroomContext)

    const style = {
        marginLeft: 6
    }
    const flexStyle = {
        display: 'flex',
        color: 'white'
    }
  return (
    <>
    <AddClassroomModal
        visible={editClassroomModal}
        onOpen={() => handleEditClassroom(true)}
        onClose={()=> handleEditClassroom(false)}
        editData={selectedClassroom}
    />
    <Modal
        open={viewClassroomModal}
        onOpen={() => handleViewClassroomModal(true)}
        onClose={() => handleViewClassroomModal(false)}
        size='small'
        
    >
        {selectedClassroom && 
        
        (<Container style={{ padding: 40}}>
            <Icon size='large' name='edit' onClick={() => handleEditClassroom(selectedClassroom)}/>
            <Segment style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#4778B3', paddingTop:28}}>
                <div style={flexStyle}>
                    <h4>Course:{' '}</h4>
                    <p style={style}>{selectedClassroom.course}</p>
                </div>
                <div style={flexStyle}>
                    <h4>Name:</h4>
                    <p style={style}> {'  ' +selectedClassroom.name}</p>
                </div>
                <div style={flexStyle}>
                    <h4 >Schedule:</h4>
                    <p style={style}>{selectedClassroom.startingHour + ' - ' + selectedClassroom.endingHour}</p>
                </div>
                <div style={flexStyle}>
                    <h4 >Teacher:</h4>
                    <p style={style}>{selectedClassroom.teacher}</p>
                </div>
                <div style={flexStyle}>
                    <h4 >Students:</h4>
                    <p style={style}>{selectedClassroom.students.length}</p>
                </div>
            </Segment>
            <SimpleStudentsTable data={selectedClassroom.students}/>
        </Container>)
        }

    </Modal>
    </>
  )
}
