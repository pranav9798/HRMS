import React from "react";
import{Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box,List, ListItemText, ListItemIcon,ListItem, Grid  } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  typography: {
    flexGrow: 1,
    textAlign: "center",
    
      },
}));
export default function Menu() {
  const classes = useStyles();

  return (
<Grid item xs={3} md={3}>

      <ul className="menuStyle">
         <li><Link to="/accounttab">Account Tab</Link></li>
         <li><Link to="/projecttab">Project Tab</Link></li>
         <li><Link to="/roletab">Role Tab</Link></li>
         <li><Link to="/verticaltab">Vertical Tab</Link></li>
         <li><Link to="/billstatustab">Bill Status Tab</Link></li>
         <li><Link to="/locationtab">Location Tab</Link></li>
         <li><Link to="/resourcetab">Resource Tab</Link></li>
         <li><Link to="/revenuetab">Revenue Tab</Link></li>
         <li><Link to="/leavetab">Leave Tab</Link></li>
         <li><Link to="/holidaytab">Holiday Tab</Link></li>
        </ul>
 </Grid>
  );
}
 
