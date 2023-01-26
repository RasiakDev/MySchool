import React,{useContext} from 'react'
import {Dropdown } from 'semantic-ui-react'
import { StudentContext } from '../context/StudentContext'

export default function YearPicker({pickedYear}) {

    const {semesters,updateTableData} = useContext(StudentContext)
    const dropDownValue = ''
   
    const options = semesters.map(item => {
        return {
            key: item.year,
            text: item.year,
            value: item.year
        }
    })

    const handleChange = (event, {value}) => {
        for (let index = 0; index < semesters.length; index++) {
            const element = semesters[index];        
            if(element.year === value){
                //send the picked year value to parent component
                updateTableData(semesters[index].students)
            }
        }
    }


    return (
        <Dropdown
            button
            placeholder='Academic Year'
            defaultValue={dropDownValue}
            onChange={handleChange}
            options={options}
        />
    )
}
