import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Icon, Header, Sidebar, Menu, Segment, Container } from 'semantic-ui-react'

function SideMenu({children}) {

    const [visible, setVisible] = useState(true)

  return (
    <div>
        <Sidebar.Pushable style={{transform : 'none'}} as={Segment}>
            <Sidebar
            as={Menu}
            icon='labeled'
            inverted
            vertical
            visible={visible}
            width='thin'
            animation='uncover'
            >
                <div style={{width: '100%', height: 60}}>

                </div>
                <Link to={'/'}>
                    <Menu.Item>
                        <Icon name='dashboard'/>
                        Dashboard
                    </Menu.Item>
                </Link>
                <Link to={'schedules'}>
                    <Menu.Item>
                        <Icon name='calendar check'/>
                        Schedules
                    </Menu.Item>
                </Link>
                <Link to={'students'}>
                    <Menu.Item>
                        <Icon name='student'/>
                        Students
                    </Menu.Item>
                </Link>
                <Link to={'teachers'}>
                    <Menu.Item>
                        <Icon name='user'/>
                        Teachers
                    </Menu.Item>
                </Link>
                
            </Sidebar>

            <Sidebar.Pusher>
                <Header size='small' as={Segment} inverted >
                    <Container fluid onClick={() => setVisible((prevState) => !prevState )}>

                        <Icon name='list' size='large'  />                    
                    </Container>
                </Header>
            <Segment basic>
                {children}
            </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        
    </div>
  )
}

export default SideMenu