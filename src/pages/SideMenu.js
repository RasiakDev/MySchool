import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Icon, Sidebar, Menu, Container } from 'semantic-ui-react'
import '../css/SideMenu.css'
import colors from '../config/colors'
function SideMenu({children}) {

    const [visible, setVisible] = useState(true)
    const [width, setWidth] = useState('85%')

  return (
        <Sidebar.Pushable className="container">
            <Sidebar
            onHide={() => setWidth('95%')}
            onShow={() => width('90%')}
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
                        color='black'
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
                        <Icon name='clock'/>
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
                <Link to={'academic-years'}>
                    <Menu.Item>
                        <Icon name='calendar alternate'/>
                        Academic Years
                    </Menu.Item>
                </Link>
                
            </Sidebar>
            
            <Sidebar.Pusher style={{width: '90%', paddingLeft: 60, paddingRight: 60, paddingTop: 30, display: 'flex', justifyContent:'center', overflowY: 'scroll'}}  >
                

                {!visible && (
                    <Icon 
                        style={{float: 'left'}}
                        name='list'
                        color='black'
                        size='large'
                        onClick={() => setVisible((prevState) => !prevState )}
                    />
                )}
                    {children}
                
            
            </Sidebar.Pusher>
            
        </Sidebar.Pushable>
    
  )
}

export default SideMenu