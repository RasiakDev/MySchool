import React,{useState, useContext} from 'react'
import { Button, Modal, Input } from 'semantic-ui-react'
import StudentsTable from '../components/StudentsTable'
import { SemestersContext } from '../context/SemestersContext'

export default function AddNewSemester() {

    const [visible, setVisible] = useState(true)
    const {modalVisible, setModalVisible} = useContext(SemestersContext)
    
    return (
        <Modal
            open={modalVisible}
            onOpen={() => setModalVisible(true)}
            onClose={() => setModalVisible(false)}
        >
            <Modal.Header>
                <Input label="Season Name"></Input>
            </Modal.Header>
            <Modal.Content scrolling>
                <Modal.Description>
                    <StudentsTable checkbox={true}/>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button>Click</Button>
            </Modal.Actions>
        </Modal>
    )
}
