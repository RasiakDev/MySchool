import React from 'react'
import { Grid, Button, Header } from 'semantic-ui-react'
import ScheduleTable from '../components/ScheduleTable'

export default function Schedules() {
  return (
   <Grid  container doubling columns={7}>
    <Grid.Row textAlign='center'>      
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
      <Grid.Row>
        <Grid.Column>
          <ScheduleTable/>
        </Grid.Column>
        <Grid.Column>
          <ScheduleTable/>
        </Grid.Column>
        <Grid.Column>
          <ScheduleTable/>
        </Grid.Column>
        <Grid.Column>
          <ScheduleTable/>
        </Grid.Column>
        <Grid.Column>
          <ScheduleTable/>
        </Grid.Column>
        <Grid.Column>
          <ScheduleTable/>
        </Grid.Column>
        <Grid.Column>
          <ScheduleTable/>
        </Grid.Column>
      </Grid.Row>
   </Grid>
  )
}
