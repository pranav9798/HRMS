//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button, MenuItem, Grid } from '@material-ui/core';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function ResourceTab() {
    const classes = useStyles();
    const paperStyle={padding:'50px 20px', width:400,margin:"20px auto"}
    const[account,setAccount]=useState('')
    const[project,setProject]=useState('')
    const[resourceName,setResourceName]=useState('')
    const[billingStatus,setBillingStatus]=useState('')
    const[rrf,setRrf]=useState('')
    const[role,setRole]=useState('')
    const[resourceVertical,setResourceVertical]=useState('')
    const[location,setLocation]=useState('')
    const[startDate,setStartDate]=useState('')
    const[aging,setAging]=useState('')
    const[endDate,setEndDate]=useState('')
    const[rate,setRate]=useState('')
    const[syncfalg,setsyncfalg]=useState(false)  
   
    const[projects,setProjects]=useState([])
    const[accounts,setAccounts]=useState([])
    const[billingStatuses,setBillingStatuses]=useState([])
    const[roles,setRoles]=useState([])
    const[verticals,setVerticals]=useState([])
    const[locations,setLocations]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const resourceTab={account,project,resourceName,billingStatus,rrf,role,resourceVertical,location,startDate,aging,endDate,rate,syncfalg}
        console.log(resourceTab)
        fetch("http://localhost:8080/resourcetab/addresource",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(resourceTab)

  }).then(()=>{
    console.log("New Resource added")
    swal({
      title: "Success!",
      text: "Resource Added Successfully!",
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
},
 [])

useEffect(()=>{
  fetch("http://localhost:8080/projecttab/getproject")
.then(res=>res.json())
.then((result)=>{
  setProjects(result);
}
)
},[])

useEffect(()=>{
  fetch("http://localhost:8080/billstatustab/getbillstatus")
.then(res=>res.json())
.then((result)=>{
  setBillingStatuses(result);
}
)
},[])

useEffect(()=>{
  fetch("http://localhost:8080/roletab/getrole")
.then(res=>res.json())
.then((result)=>{
  setRoles(result);
}
)
},[])

useEffect(()=>{
  fetch("http://localhost:8080/verticaltab/getvertical")
.then(res=>res.json())
.then((result)=>{
  setVerticals(result);
}
)
},[])

useEffect(()=>{
  fetch("http://localhost:8080/locationtab/getlocation")
.then(res=>res.json())
.then((result)=>{
  setLocations(result);
}
)
},[])
  return (
    <>
    <Grid item xs={6} md={6}>
        <Paper elevation={3} style={paperStyle}>
        <h2><u>Add Resource</u></h2>   
    <form className={classes.root} noValidate autoComplete='off'>
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
      <br></br>
      <TextField id="outlined-basic" label="Resource Name" variant="outlined" fullWidth
      value={resourceName}
      onChange={(e)=>setResourceName(e.target.value)}
      />
      <br></br>
      <TextField
            id="outlined-basic"
            select
            label="Billing Status"
            value={billingStatus}
            onChange={(e) => setBillingStatus(e.target.value)}
            helperText="Please select your Billing Status"
          >
            {billingStatuses.map((option) => (
              <MenuItem key={option.billingStatus} value={option.billingStatus}>
                {option.billingStatus}
              </MenuItem>
            ))}
      </TextField>
      <br></br>
      <TextField id="outlined-basic" label="RRF" variant="outlined" fullWidth
      value={rrf}
      onChange={(e)=> setRrf(e.target.value)}
      />
      <br></br>
      <TextField
            id="outlined-basic"
            select
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            helperText="Please select your Role"
          >
            {roles.map((option) => (
              <MenuItem key={option.role} value={option.role}>
                {option.role}
              </MenuItem>
            ))}
      </TextField>
      <br></br>
      <TextField
            id="outlined-basic"
            select
            label="Vertical"
            value={resourceVertical}
            onChange={(e) => setResourceVertical(e.target.value)}
            helperText="Please select your Vertical"
          >
            {verticals.map((option) => (
              <MenuItem key={option.vertical} value={option.vertical}>
                {option.vertical}
              </MenuItem>
            ))}
      </TextField>
      <br></br>
      <TextField
            id="outlined-basic"
            select
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            helperText="Please select your Location"
          >
            {locations.map((option) => (
              <MenuItem key={option.location} value={option.location}>
                {option.location}
              </MenuItem>
            ))}
      </TextField>
      <br></br>
      <TextField
        id="date"
        label="Select StartDate/Open"
        type="date"
        defaultValue="DD-MM-YYYY"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e)=>setStartDate(e.target.value)} 
      />
      <br></br>
      <TextField id="outlined-basic" label="Aging" variant="outlined" fullWidth
      value={aging}
      onChange={(e)=>setAging(e.target.value)}
      />
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
      <br></br>
      <br></br>
      <TextField id="outlined-basic" label="Rate" variant="outlined" fullWidth
      value={rate}
      onChange={(e)=>setRate(e.target.value)}
      />
      <TextField id="outlined-basic" label="Syncfalg" variant="outlined" fullWidth
      value={syncfalg}
      onChange={(e)=>setsyncfalg(e.target.value)}
      />
      
      <Button variant="contained" color="primary" onClick={handleClick}>
  Submit
</Button>
    </form> 
    </Paper>
    </Grid>
    </>  
  );
}