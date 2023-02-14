import React from 'react'
import '../css/ScheduleBox.css'
import { Container } from 'semantic-ui-react'


export default function ScheduleBox({teacher, lenda, className, startingHour, endingHour, onClick}) {

    return (
        <div onClick={onClick} className='scheduleBox'>
            <h3>{lenda}</h3>
            <h3>{startingHour + ' - ' + endingHour} </h3>
            <h4>{className}</h4>
            <h4>{teacher}</h4>
        </div>
    )
}
