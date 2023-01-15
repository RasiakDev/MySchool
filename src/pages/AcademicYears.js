import React, {useContext} from 'react'
import { Table, Button } from 'semantic-ui-react'
import { StudentContext } from '../context/StudentContext'

export default function AcademicYears() {
    const {semesters} = useContext(StudentContext)
    

    return (
        <div >
            <Button>Add new Semester</Button>
            <Table selectable >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            Semester
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Classes
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
                                    {item.studentCount}
                                </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
