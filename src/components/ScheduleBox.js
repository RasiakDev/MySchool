import React from 'react'
import '../css/ScheduleBox.css'
import { Container } from 'semantic-ui-react'


export default function ScheduleBox({teacher, lenda, className, startHour, startMinutes, endHour, endMinutes, onClick}) {

    return (
        <div onClick={onClick} className='scheduleBox'>
            <h4>{className}</h4>
            <h3>{startHour + ':' + endHour + ' - ' + endHour + ':' + endMinutes}</h3>
            <h3>{lenda}</h3>
            <h4>{teacher}</h4>
        </div>
    )
}
