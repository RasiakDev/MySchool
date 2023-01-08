import React, {useContext} from 'react'
import { Grid, Header, Segment, Table } from 'semantic-ui-react'
import ScheduleBox from './ScheduleBox'
import {ScheduleContext} from '../context/ScheduleContext'

export default function ScheduleTable() {

  const {monday} = useContext(ScheduleContext)

  monday.map((item) => console.log(item.id))
  const container = {
    width: '100%',
    height: 200,
    backgroundColor: 'red'
  }



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
              {monday.map((item) => (
              <ScheduleBox
                lenda={item.class}
                className={item.name}
                startingHour={item.startingHour}
                engingHour={item.endingHour}
                teacher={item.teacher}/>
              ))}
            </Grid.Column>
            <Grid.Column>
              <ScheduleBox/>
            </Grid.Column>
            <Grid.Column>
              <ScheduleBox/>
            </Grid.Column>
            <Grid.Column>
              <ScheduleBox/>
            </Grid.Column>
            <Grid.Column>
              <ScheduleBox/>
            </Grid.Column>
            <Grid.Column>
              <ScheduleBox/>
            </Grid.Column>
            <Grid.Column>
              <ScheduleBox/>
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  )
}

