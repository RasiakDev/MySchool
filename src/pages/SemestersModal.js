import React,{useState, useContext} from 'react'
import { Button, Modal, Input, Checkbox } from 'semantic-ui-react'
import StudentsTable from '../components/StudentsTable'
import { SemestersContext } from '../context/SemestersContext'

export default function AddNewSemester() {
    const {
        modalVisible,
        setModalVisible,
        addNewSeason,
        handleChange,
        inputValue,
    } = useContext(SemestersContext)
    
    const handleCheckList = (val) => {
        console.log(val)
    }
    return (
        <Modal
            open={modalVisible}
            onOpen={() => setModalVisible(true)}
            onClose={() => setModalVisible(false)}
        >
            <Modal.Header>
                <Input name='year' onChange={handleChange} label="Season Name"></Input>
            </Modal.Header>
            <Modal.Content scrolling>
                <Modal.Description>
                    <StudentsTable checkList={handleCheckList}/>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button type='submit' onClick={addNewSeason}>Click</Button>
            </Modal.Actions>
        </Modal>
    )
}
