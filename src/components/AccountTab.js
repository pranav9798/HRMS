//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button, MenuItem, Box, Grid } from '@material-ui/core';
import swal from 'sweetalert';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function AccountTab() {
    const classes = useStyles();
    const paperStyle={padding:'50px 20px', width:400,margin:"20px auto"}
    const[account,setAccount]=useState('')
    const[startDate,setStartDate]=useState('')
    const[endDate,setEndDate]=useState('')
    const[status,setStatus]=useState('')
    const[custom1,setCustom1]=useState('')
    const[custom2,setCustom2]=useState('')
    const[custom3,setCustom3]=useState('')
    const[accounts,setAccounts]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const accountTab={account,startDate,endDate,status,custom1,custom2,custom3}
        console.log(accountTab)
        fetch("http://localhost:8080/accounttab/addaccount",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(accountTab)

  }).then(()=>{
    console.log("New Account added")
    swal({
      title: "Success!",
      text: "Account Added Successfully!",
      icon: "success",
      button: "OK!",
    });
  })
    }
  
  
  
  const statustype = [
    {
      value: "Active",
      label: "Active"
    },
    {
      value: "Inactive",
      label: "Inactive"
    }
  ]; 

  useEffect(()=>{
    fetch("http://localhost:8080/accounttab/getaccount")
  .then(res=>res.json())
  .then((result)=>{
    setAccounts(result);
    console.log(result);
  }
  )
},[])

  return (
  <>
  <Grid item xs={6} md={6}>
    <Paper elevation={3} style={paperStyle}>
        <h2><u>Add Account</u></h2>   
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField id="outlined-basic" label="Account" variant="outlined" fullWidth
      value={account}
      onChange={(e)=>setAccount(e.target.value)}
      />
      <br></br>
      <br></br>
      <TextField
        id="date"
        label="Select StartDate"
        type="date"
        defaultValue="DD-MM-YYYY"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e)=>setStartDate(e.target.value)} 
      />
      <TextField
        id="date"
        label="Select EndDate"
        type="date"
        defaultValue="YYYY-MM-DD"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e)=>setEndDate(e.target.value)}       
      />
      <br></br>
      <TextField
            id="outlined-basic"
            select
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            helperText="Please select your Status"
          >
            {statustype.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
      <TextField id="outlined-basic" label="Custom1" variant="outlined" fullWidth
      value={custom1}
      onChange={(e)=>setCustom1(e.target.value)}
      />
      <TextField id="outlined-basic" label="Custom2" variant="outlined" fullWidth
      value={custom2}
      onChange={(e)=>setCustom2(e.target.value)}
      />
      <TextField id="outlined-basic" label="Custom3" variant="outlined" fullWidth
      value={custom3}
      onChange={(e)=>setCustom3(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
  Submit
</Button>
    </form> 
    </Paper>
   
      </Grid>
      <Grid item xs={3} md={3}>
      <h2>All Accounts Details:</h2>
      <Paper elevation={3} style={paperStyle}>
        {accounts.map(accounts => (
          <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={accounts.id}>
            Id:{accounts.id}<br/>
            Account:{accounts.account}<br/>
            StartDate:{accounts.startDate}<br/>
            EndDate:{accounts.endDate}<br/>
            Status:{accounts.status}<br/>
            Custom1:{accounts.custom1}<br/>
            Custom2:{accounts.custom2}<br/>
            Custom3:{accounts.custom3}
          </Paper>
        ))
        }
      </Paper>
      </Grid>
      </>
  );
}
