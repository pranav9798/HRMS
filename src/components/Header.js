import React from "react";
import{Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box,List, ListItemText, ListItemIcon,ListItem  } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    
  },
  typography: {
    flexGrow: 1,
    textAlign: "center",
    
      },
}));
export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
      <Toolbar variant="dense">
        <Typography
            variant="h6"
            color="inherit"
            className={classes.typography}>
            Welcome to HRMS Application
          </Typography>
        </Toolbar>
      </AppBar>
      
         </div>
  );
}