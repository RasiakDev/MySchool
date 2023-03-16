import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Students from './pages/Students';
import Teachers from './pages/Teachers'
import Schedules from './pages/Schedules';
import SideMenu from "./pages/SideMenu";
import { StudentProvider } from "./context/StudentContext";
import { ScheduleProvider } from "./context/ScheduleContext";
import { SemestersProvider } from "./context/SemestersContext";
import {ClassroomProvider} from "./context/ClassroomContext";
import Semesters from "./pages/Semesters";
function App() {
  return (
    

    <StudentProvider>
    <ScheduleProvider>
    <SemestersProvider>
    <ClassroomProvider>
      <BrowserRouter>
        <SideMenu>
          <Routes>
              <Route index element={<Dashboard/>}/>
              <Route path='teachers' element={<Teachers/>}/>
              <Route path='students' element={<Students/>}/>
              <Route path='schedules' element={<Schedules/>}/>
              <Route path='academic-years' element={<Semesters/>}/>
          </Routes>
        </SideMenu>
      </BrowserRouter>
    </ClassroomProvider>
    </SemestersProvider>
    </ScheduleProvider>
    </StudentProvider>
    
      
  
    
  );
}

export default App;
