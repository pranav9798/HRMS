//import * as React from 'react';
import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button, MenuItem } from '@material-ui/core';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function HolidayTab() {
    const classes = useStyles();
    const paperStyle={padding:'50px 20px', width:400,margin:"20px auto"}
    const[day,setDay]=useState('')
    const[month,setMonth]=useState('')
    const[description,setDescription]=useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const holidayTab={day,month,description}
        console.log(holidayTab)
        fetch("http://localhost:8080/holidaytab/addholiday",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(holidayTab)

  }).then(()=>{
    console.log("New Holiday added")
    swal({
      title: "Success!",
      text: "Holiday Added Successfully!",
      icon: "success",
      button: "OK!",
    });
  })
    }

    const daytype = [
      {
        value: "Monday",
        label: "Monday"
      },
      {
        value: "Tuesday",
        label: "Tuesday"
      },
      {
        value: "Wednesday",
        label: "Wednesday"
      },
      {
        value: "Thursday",
        label: "Thursday"
      },
      {
        value: "Friday",
        label: "Friday"
      },
      {
        value: "Saturday",
        label: "Saturday"
      },
      {
        value: "Sunday",
        label: "Sunday"
      }
    ];

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h2><u>Add Holidays</u></h2>   
    <form className={classes.root} noValidate autoComplete='off'>
          
      <TextField
            id="outlined-basic"
            select
            label="Day"
            value={day}
            required
            onChange={(e) => setDay(e.target.value)}
            helperText="Please select your Day"
          >
            {daytype.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
      </TextField>
          <br></br>
      <TextField
        id="date"
        label="Select MonthDate"
        type="date"
        defaultValue="DD-MM-YYYY"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e)=>setMonth(e.target.value)} 
      />
      <br></br>
      <br></br>
      <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth required
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
  Submit
</Button>
    </form> 
    </Paper>
    </Container>     
  );
}
