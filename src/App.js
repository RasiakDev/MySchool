import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Students from './pages/Students';
import Teachers from './pages/Teachers'
import Schedules from './pages/Schedules';
import NoPage from "./pages/NoPage";
import SideMenu from "./pages/SideMenu";
import { Sidebar } from "semantic-ui-react";
function App() {
  return (
    <BrowserRouter>
      <SideMenu>
        <Routes>        
            <Route index element={<Dashboard/>}/>
            <Route path='teachers' element={<Teachers/>}/>
            <Route path='students' element={<Students/>}/>
            <Route path='schedules' element={<Schedules/>}/>        
        </Routes>
      </SideMenu>
    </BrowserRouter>
      
  
    
  );
}

export default App;
