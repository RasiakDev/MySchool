import React,{useContext, useState} from 'react'
import { Dropdown } from 'semantic-ui-react'
import { StudentContext } from '../context/StudentContext'

export default function YearPicker({pickedYear, selectedData}) {

    const {semesters} = useContext(StudentContext)
    const [dropDownValue, setDropDownValue] = useState("2022 - 2023")

    const options= semesters.map(item => {
        return {
            key: item.year,
            text: item.year,
            value: item.year
        }
    })
    const handleChange = (event, value) => {
      //find index of selected dropdown value
      for (let index = 0; index < semesters.length; index++) {
        const element = semesters[index];        
        if(element.year == value.value)
           //send the picked year value to parent component
           pickedYear(value.value, semesters[index].students)
      }
      setDropDownValue(value.value)
    }
    return (
        <Dropdown
            defaultValue={dropDownValue}
            onChange={handleChange}
            options={options}
        />
    )
}
