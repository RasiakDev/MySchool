import React, {useContext} from 'react'
import ScheduleTable from '../components/ScheduleTable'
import {Button, Modal} from 'semantic-ui-react'
import { SemestersContext } from '../context/SemestersContext'
import ViewClassroomModal from './ViewClassroomModal'

export default function ViewSemesterModal() {
    const {
      viewSemesterModal,
      handleViewSemesterModal,
      selectedYear
    } = useContext(SemestersContext)
  return (
    <>
    <Modal 
      open={viewSemesterModal}
      onOpen={() => handleViewSemesterModal(true)}
      onClose={() => handleViewSemesterModal(false)}
      size='fullscreen'
    >
      <Modal.Header style={{display: 'flex', justifyContent: 'center'}}>
        <h1>{selectedYear.year}</h1>
        <Button primary style={{position: 'absolute', right: 20}}>View Students</Button>
      </Modal.Header>
      <Modal.Content scrolling style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>          
        <ScheduleTable selectedYear={selectedYear}/>
      </Modal.Content>
    </Modal>
    <ViewClassroomModal/>
    </>
  )
}
