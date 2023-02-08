//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Paper, Button, MenuItem, Grid } from '@material-ui/core';
import swal from 'sweetalert';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


// use style for form designing 
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function ResourceTab() {
   const classes = useStyles();


    const paperStyle={padding:'50px 70px', width:600,margin:"20px auto"}
    const[account,setAccount]=useState('')
    const[project,setProject]=useState('')
    const[resourceName,setResourceName]=useState([])
    
    const[startDate,setStartDate]=useState('')
   
    const[endDate,setEndDate]=useState('')  
    const[projects,setProjects]=useState([])
    const[accounts,setAccounts]=useState([])
   
// handle click for get record from resource
    const handleClick=(e)=>{
        e.preventDefault()
         const resourceTab={account,resourceName,startDate,endDate}
         console.log(resourceTab)
        fetch("http://localhost:8080/resourcetab/getresource",{
      method:"GET",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify()

  })
    .then(res=>res.json())
    .then((result)=>{
     setResourceName(result);
    
    console.log("New Resource added")

    
    swal({
      title: "Success!",
      text: "Leave Added Successfully!",
      icon: "success",
      button: "OK!",
    });
  })
    }

useEffect(()=>{
  fetch("http://localhost:8080/accounttab/getaccount")
.then(res=>res.json())
.then((result)=>{
  setAccounts(result);
  console.log(result);
}
)
},[])

useEffect(()=>{
  fetch("http://localhost:8080/projecttab/getproject")
.then(res=>res.json())
.then((result)=>{
  setProjects(result);
  console.log("project",result)

}
)
},[])

useEffect(()=>{
  fetch("http://localhost:8080/resourcetab/getresource")
  .then(res=>res.json())
  .then((result)=>{
    setResourceName(result);
    console.log("get resources", result);
})
},[])




// useEffect(()=>{
//   fetch("http://localhost:8080/verticaltab/getvertical")
// .then(res=>res.json())
// .then((result)=>{
//   setVerticals(result);
// }
// )
// },[])

  return (
    <>
    <Grid item xs={6} md={6}>
        <Paper elevation={3} style={paperStyle}>
        <h2><u>Add Leave</u></h2>   
    <form className={classes.root} noValidate autoComplete='off'>
    <TextField
            id="outlined-basic"
            select
            label="Project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            helperText="Please select your Project"
          >
            {projects.map((option) => (
              <MenuItem key={option.projectName} value={option.projectName}>
                {option.projectName}
              </MenuItem>
            ))}
             </TextField>


      <TextField
            id="outlined-basic"
            select
            label="Account"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            helperText="Please select your Account"
          >
            {accounts.map((option) => (
              <MenuItem key={option.account} value={option.account}>
                {option.account}
              </MenuItem>
            ))}
      </TextField>
     
  <TextField
        id="date"
        label="Select EndDate/LWD"
        type="date"
        defaultValue="YYYY-MM-DD"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e)=>setEndDate(e.target.value)}       
      />
      
      <Button variant="contained" color="primary" onClick={handleClick}>
  Submit
</Button>
    </form> 
    </Paper>
    <Grid item xs={3} md={3} width="700%">
      <h2 >All Resource Details:</h2>
    

<TableContainer component={Paper} sx={{width:'700%'}}>
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{width:"100rem" }}>Resource Name</StyledTableCell>
            <StyledTableCell sx={{width:"100rem" }}>Leaves</StyledTableCell>
            <StyledTableCell sx={{width:"100rem" }}>Months</StyledTableCell>
            <StyledTableCell sx={{width:"100rem" }}>Comments</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          
          

        {resourceName.map(e => (
          <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={e.id}>
            
            Id:{e.id}<br/>
            Account:{e.account}<br/>
            Project:{e.project}<br/>
            Custom1: {e.custom1}<br/>
            Resource Name:{e.resourceName}
            
          </Paper>
        ))
        }
      
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Product name here
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              
            </StyledTableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
    </Grid>
    </>  
  );
}