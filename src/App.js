import './App.css';
import Menu from './components/Menu.js';
import VerticalTab from './components/VerticalTab';
import RoleTab from './components/RoleTab';
import BillStatusTab from './components/BillstatusTab';
import LocationTab from './components/LocationTab';
import AccountTab from './components/AccountTab';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProjectTab from './components/ProjectTab';
import HolidayTab from './components/HolidayTab';
import ResourceTab from './components/ResourceTab';
import RevenueTab from './components/RevenueTab';
import LeaveTab from './components/LeaveTab';
import { Grid } from '@material-ui/core';
import Header from './components/Header';

function App() {
  return (  
    <Router>  
      <Header></Header>
      <Grid container spacing={2}>
      <Menu></Menu>
    {/* <div className='container'>
    </div> */}
        <Routes> 
          
          <Route path="/verticaltab" element={<VerticalTab/>}></Route>
          <Route path="/roletab" element={<RoleTab/>}></Route>
          <Route path="/billstatustab" element={<BillStatusTab/>}></Route>
          <Route path="/locationtab" element={<LocationTab/>}></Route>
          <Route path="/accounttab" element={<AccountTab/>}></Route>
          <Route path="/projecttab" element={<ProjectTab/>}></Route>
          <Route path="/holidaytab" element={<HolidayTab/>}></Route>
          <Route path="/resourcetab" element={<ResourceTab/>}></Route>
          <Route path="/revenuetab" element={<RevenueTab/>}></Route>
          <Route path="/leavetab" element={<LeaveTab/>}></Route>
        </Routes>  
        </Grid> 
    </Router>
   
  );
}

export default App;
