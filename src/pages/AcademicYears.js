import React, {useContext} from 'react'
import { Table, Button } from 'semantic-ui-react'
import { StudentContext } from '../context/StudentContext'
import { SemestersContext } from '../context/SemestersContext'
import AddNewSemesterModal from './AddSemesterModal'
import ViewSemesterModal from './ViewSemesterModal'
export default function AcademicYears() {
    const {semesters} = useContext(StudentContext)
    const {setModalVisible} = useContext(SemestersContext)

    const addNewSemester = () => {
        setModalVisible(true)
    }

    return (
        <>
        <AddNewSemesterModal/>
        <ViewSemesterModal/>
        <div style={{width: '70%'}}>
            <Button onClick={addNewSemester}>Add new Semester</Button>
            <Table selectable >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            Semester
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Classrooms
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Number of Students
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {semesters.map((item)=>(
                        <Table.Row key={item.year}>
                            <Table.Cell>
                                {item.year}
                            </Table.Cell>
                                <Table.Cell>
                                    {item.classromCount}
                                </Table.Cell>
                                <Table.Cell>
                                    {item.students.length}
                                </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
        </> 
    )
}
