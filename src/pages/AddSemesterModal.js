import React,{useState, useContext} from 'react'
import { Button, Modal, Input, Checkbox } from 'semantic-ui-react'
import StudentsTable from '../components/StudentsTable'
import { SemestersContext } from '../context/SemestersContext'
import { StudentContext } from '../context/StudentContext'

export default function AddNewSemester() {
    const {
        addSemesterModal,
        handleAddSemesterModal,
        addNewSeason,
        handleChange,
        errorState,
        validation
    } = useContext(SemestersContext)
    
    const {checkedArray, setCheckedArray} = useContext(StudentContext)
    
    const handleCheckList = (val) => {
        console.log(val)
    }
    return (
        <Modal
            open={addSemesterModal}
            onOpen={() => handleAddSemesterModal(true)}
            onClose={() => handleAddSemesterModal(false)}
        >
            <Modal.Header>
                <Input name='year' onBlur={validation} error={errorState.year} onChange={handleChange} label="Season Name"></Input>
            </Modal.Header>
            <Modal.Content scrolling>
                <Modal.Description>
                    <StudentsTable checkList={handleCheckList}/>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button positive type='submit' onClick={addNewSeason}>Save</Button>
            </Modal.Actions>
        </Modal>
    )
}
