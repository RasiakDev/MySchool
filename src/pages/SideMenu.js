import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Icon, Header, Sidebar, Menu, Segment, Container, Sticky } from 'semantic-ui-react'
import '../css/SideMenu.css'
import colors from '../config/colors'
function SideMenu({children}) {

    const [visible, setVisible] = useState(true)

  return (
        <Sidebar.Pushable>
            <Sidebar
            className='sidebar'
            as={Menu}
            icon='labeled'
            vertical
            visible={visible}
            width='thin'
            animation='uncover'
            style={{backgroundColor: colors.secondary}}
            >
                <div style={{width: '100%', height: 60}}>
                    <Icon 
                        style={{float: 'right'}}
                        name='list'
                        color='white'
                        size='large'
                        onClick={() => setVisible((prevState) => !prevState )}
                    />
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
        
            <Sidebar.Pusher >
                {/* <Header size='small' as={Segment} inverted >
                    <Container fluid onClick={() => setVisible((prevState) => !prevState )}>

                        <Icon name='list' size='large'  />                    
                    </Container>
                </Header> */}

                {!visible && (
                    <Icon 
                        style={{float: 'left'}}
                        name='list'
                        color='white'
                        size='large'
                        onClick={() => setVisible((prevState) => !prevState )}
                    />
                )}
                <Container className="container">
                    {children}
                </Container>
            
            </Sidebar.Pusher>
            
        </Sidebar.Pushable>
    
  )
}

export default SideMenu