import React, {createContext} from 'react'
import {monday} from '../data/scheduleData'


export const ScheduleContext = createContext()

export function ScheduleProvider({children}) {
    return (
        <ScheduleContext.Provider value={{monday}}>
            {children}
        </ScheduleContext.Provider>
    )
}


