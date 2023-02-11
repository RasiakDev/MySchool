import React, {useContext} from 'react'
import { Grid, Header, Segment, Table } from 'semantic-ui-react'
import ScheduleBox from './ScheduleBox'
import {ScheduleContext} from '../context/ScheduleContext'
import { SemestersContext } from '../context/SemestersContext'

export default function ScheduleTable() {

  const {selectedYear} = useContext(SemestersContext)

  return (
    <div className="scheduleTable">
      <Grid  doubling columns={7}>
        <Grid.Row as={Table} divided textAlign='center'>      
            <Grid.Column>
              <Header>
                Monday
              </Header>
            </Grid.Column>      
            <Grid.Column>
              <Header>
                Tuesday
              </Header>
            </Grid.Column>      
            <Grid.Column>
              <Header>
                Wednesday
              </Header>
            </Grid.Column>      
            <Grid.Column>
              <Header>
                Thursday
              </Header>
            </Grid.Column>      
            <Grid.Column>
              <Header>
                Friday
              </Header>
            </Grid.Column>      
            <Grid.Column>
              <Header>
                Saturday
              </Header>
            </Grid.Column>      
            <Grid.Column>
              <Header>
                Sunday
              </Header>
            </Grid.Column>      
          </Grid.Row>
          <Grid.Row divided>
            <Grid.Column>
              {
                selectedYear.map((item) => {
                  return(
                  item.weekDays.map((day)=> {
                    if(day === 'monday') 
                      return (
                        <ScheduleBox
                          lenda={item.course}
                          className={item.name}
                          startingHour={item.startingHour}
                          endingHour={item.endingHour}
                          teacher={item.teacher}
                        />
                  )})
                )})
              }
            </Grid.Column>
            <Grid.Column>
              {
                selectedYear.map((item) => {
                  return(
                  item.weekDays.map((day)=> {
                    if(day === 'tuesday') 
                      return (
                        <ScheduleBox
                          lenda={item.course}
                          className={item.name}
                          startingHour={item.startingHour}
                          endingHour={item.endingHour}
                          teacher={item.teacher}
                        />
                  )})
                )})
              }
            </Grid.Column>
            <Grid.Column>
              {
                selectedYear.map((item) => {
                  return(
                  item.weekDays.map((day)=> {
                    if(day === 'wednesday') 
                      return (
                        <ScheduleBox
                          lenda={item.course}
                          className={item.name}
                          startingHour={item.startingHour}
                          endingHour={item.endingHour}
                          teacher={item.teacher}
                        />
                  )})
                )})
              }
            </Grid.Column>
            <Grid.Column>
              {
                selectedYear.map((item) => {
                  return(
                  item.weekDays.map((day)=> {
                    if(day === 'thursday') 
                      return (
                        <ScheduleBox
                          lenda={item.course}
                          className={item.name}
                          startingHour={item.startingHour}
                          endingHour={item.endingHour}
                          teacher={item.teacher}
                        />
                  )})
                )})
              }
            </Grid.Column>
            <Grid.Column>
              {
                selectedYear.map((item) => {
                  return(
                  item.weekDays.map((day)=> {
                    if(day === 'friday') 
                      return (
                        <ScheduleBox
                          lenda={item.course}
                          className={item.name}
                          startingHour={item.startingHour}
                          endingHour={item.endingHour}
                          teacher={item.teacher}
                        />
                  )})
                )})
              }
            </Grid.Column>
            <Grid.Column>
              {
                selectedYear.map((item) => {
                  return(
                  item.weekDays.map((day)=> {
                    if(day === 'saturday') 
                      return (
                        <ScheduleBox
                          lenda={item.course}
                          className={item.name}
                          startingHour={item.startingHour}
                          endingHour={item.endingHour}
                          teacher={item.teacher}
                        />
                  )})
                )})
              }
            </Grid.Column>
            <Grid.Column>
              {
                selectedYear.map((item) => {
                  return(
                  item.weekDays.map((day)=> {
                    if(day === 'sunday') 
                      return (
                        <ScheduleBox
                          lenda={item.course}
                          className={item.name}
                          startingHour={item.startingHour}
                          endingHour={item.endingHour}
                          teacher={item.teacher}
                        />
                  )})
                )})
              }
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  )
}

