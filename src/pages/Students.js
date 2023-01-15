import React,{useContext, useState} from 'react'
import { Dropdown } from 'semantic-ui-react'
import { StudentContext } from '../context/StudentContext'
import StudentsTable from '../components/StudentsTable'
import '../css/Students.css'

export default function Students() {
  
    const {studentsList, semesters} = useContext(StudentContext)
    const [dropDownValue, setDropDownValue] = useState("2022 - 2023")
    const [tableData, setTableData] = useState(semesters[0].students)
    const options= semesters.map(item => {
              return {
                  key: item.year,
                  text: item.year,
                  value: item.year
              }
            })
    
            const selected = ''
    
    const handleChange = (event, value) => {
      // setDropDownValue(value.value)

      //find index of selected dropdown value
      for (let index = 0; index < semesters.length; index++) {
        const element = semesters[index];        
        if(element.year == value.value)
           setTableData(semesters[index].students)        
      }
      setDropDownValue(value.value)
    }

      
  return (
    <div>
      <Dropdown defaultValue={dropDownValue} onChange={handleChange} options={options}/>
      <h3>{dropDownValue}</h3>
      <StudentsTable allStudents schoolSemester="2022 - 2023" studentsList={tableData}/>
    </div>
  )
}
