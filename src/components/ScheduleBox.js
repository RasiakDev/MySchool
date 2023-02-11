import React from 'react'
import '../css/ScheduleBox.css'
import { Container } from 'semantic-ui-react'


export default function ScheduleBox({teacher, lenda, className, startingHour, endingHour}) {

    const boxStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 130,
        border: 1,
        backgroundColor: 'teal',
        borderRadius: 2,
        paddingVertical: 3        

    }
    return (
        <div className='scheduleBox'>
            <h3>{lenda}</h3>
            <h3>{startingHour + ' - ' + endingHour} </h3>
            <h4>{className}</h4>
            <h4>{teacher}</h4>
        </div>
    )
}
