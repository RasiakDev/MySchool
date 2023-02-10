import React, {useContext} from 'react'
import ScheduleTable from '../components/ScheduleTable'
import {Modal} from 'semantic-ui-react'
import { SemestersContext } from '../context/SemestersContext'

export default function ViewSemesterModal() {
    const {
      viewSemesterModal,
      handleViewSemesterModal,
      selectedYear
    } = useContext(SemestersContext)
  return (
    <Modal 
      open={viewSemesterModal}
      onOpen={() => handleViewSemesterModal(true)}
      onClose={() => handleViewSemesterModal(false)}
      size='fullscreen'
    >
      <Modal.Content style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>2022 - 2023</h1>
        <ScheduleTable/>
      </Modal.Content>
    </Modal>
  )
}
