import React, {useContext} from 'react'
import ScheduleTable from '../components/ScheduleTable'
import { SemestersContext } from '../context/SemestersContext'
import ViewClassroomModal from './ViewClassroomModal'

export default function Schedules() {
  const {currentSeason, selectedYear} = useContext(SemestersContext)
  return (  
    <>
     <ScheduleTable selectedYear={currentSeason}/>
     <ViewClassroomModal/>
    </>
  )
}
