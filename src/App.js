import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Students from './pages/Students';
import Teachers from './pages/Teachers'
import Schedules from './pages/Schedules';
import SideMenu from "./pages/SideMenu";
import { StudentProvider } from "./context/StudentContext";
import { ScheduleProvider } from "./context/ScheduleContext";
import AcademicYears from "./pages/AcademicYears";
function App() {
  return (
    

    <StudentProvider>
    <ScheduleProvider>
      <BrowserRouter>
        <SideMenu>
          <Routes>
              <Route index element={<Dashboard/>}/>
              <Route path='teachers' element={<Teachers/>}/>
              <Route path='students' element={<Students/>}/>
              <Route path='schedules' element={<Schedules/>}/>
              <Route path='academic-years' element={<AcademicYears/>}/>
          </Routes>
        </SideMenu>
      </BrowserRouter>
    </ScheduleProvider>
    </StudentProvider>
    
      
  
    
  );
}

export default App;
