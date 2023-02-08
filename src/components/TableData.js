import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(account,startDate,endDate,status,custom1,custom2,custom3) {
  return { account,startDate,endDate,status,custom1,custom2,custom3 };
}

const rows = [
  createData(this.props.accountTab)
];

export default function CustomizedTables(props) {
  return (
    <TableContainer component={props.AccountTab}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Account</StyledTableCell>
            <StyledTableCell align="right">StartDate</StyledTableCell>
            <StyledTableCell align="right">EndDate</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Custom1</StyledTableCell>
            <StyledTableCell align="right">Custom2</StyledTableCell>
            <StyledTableCell align="right">Custom3</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.account}>
              <StyledTableCell component="th" scope="row">
                {row.account}
              </StyledTableCell>

              <StyledTableCell align="right">{row.startDate}</StyledTableCell>
              <StyledTableCell align="right">{row.endDate}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.custom1}</StyledTableCell>
              <StyledTableCell align="right">{row.custom2}</StyledTableCell>
              <StyledTableCell align="right">{row.custom3}</StyledTableCell>
    
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}