'use client';
import { Grid, Paper } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import BaseCard from "../../(DashboardLayout)/components/shared/BaseCard.tsx";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
} from "@mui/material";
import React from "react";
import { blue } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));
  
const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const data = [
  {
    id: "1",
    amount: "500000",
    billId: "123",
    debtorName: "Nguyen Van A",
    date: "21/3/2024"
  },
  {
    id: "2",
    amount: "200000",
    billId: "563",
    debtorName: "Nguyen Van B",
    date: "21/3/2024"
  },
  {
    id: "3",
    amount: "451000",
    billId: "999",
    debtorName: "Nguyen Van C",
    date: "21/3/2024"
  }
];

const ListDebts = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="List Debts">
      <TableContainer
        sx={{
          width: {
            xs: "274px",
            sm: "100%",
          },
        }}
      >
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Bill Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Debtor name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography align="right">
                  Amount
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {item.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  
                      <Typography variant="h6" fontWeight={600}>
                        {item.billId}
                        
                      </Typography>
                    
                </TableCell>
                
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {item.debtorName}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {item.date}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{item.amount} đ</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BaseCard>
      </Grid>
    </Grid>
  );
};

export default ListDebts;