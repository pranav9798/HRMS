//import * as React from 'react';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button, MenuItem , Grid} from '@material-ui/core';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function BillStatusTab() {
    const classes = useStyles();
    const paperStyle={padding:'50px 20px', width:400,margin:"20px auto"}
    const[billingStatus,setBillingStatus]=useState('')
    const[status,setStatus]=useState('')
    const[custom1,setCustom1]=useState('')
    const[custom2,setCustom2]=useState('')
    const[custom3,setCustom3]=useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const billStatusTab={billingStatus,status,custom1,custom2,custom3}
        console.log(billStatusTab)
        fetch("http://localhost:8080/billstatustab/addbillstatus",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(billStatusTab)

  }).then(()=>{
    console.log("New BillStatus added")
    swal({
      title: "Success!",
      text: "BillStatus Added Successfully!",
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

    const billtype = [
      {
        value: "Billed",
        label: "Billed"
      },
      {
        value: "NBL",
        label: "NBL"
      },
      {
        value: "Hold",
        label: "Hold"
      },
      {
        value: "Cancelled",
        label: "Cancelled"
      }
    ];
  return (
    <>
    <Grid item xs={6} md={6}>
        <Paper elevation={3} style={paperStyle}>
        <h2><u>Add Billing Status</u></h2>   
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField
            id="outlined-basic"
            select
            label="BillStatus"
            value={billingStatus}
            onChange={(e) => setBillingStatus(e.target.value)}
            helperText="Please select your Billing Status"
          >
            {billtype.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
      </TextField>
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
    </>
  );
}
