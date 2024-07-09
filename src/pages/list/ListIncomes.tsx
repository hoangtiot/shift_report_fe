'use client';
import { Grid, Paper } from "@mui/material";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import BaseCard from "../components/card/BaseCard";
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
import { amber } from "@mui/material/colors";

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
    paymentMethod: "Cash",
    amount: "3411000",
    date: ""
  },
  {
    id: "2",
    paymentMethod: "Card",
    amount: "12378200",
    date: ""
  },
  {
    id: "3",
    paymentMethod: "Transfer",
    amount: "2117000",
    date: ""
  }
];

const ListIncomes = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="List Incomes">
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
                  Payment method
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Date
                </Typography>
              </TableCell>
              
              <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
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
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {item.paymentMethod}
                      </Typography>
                      <Typography color="textSecondary" fontSize="13px">
                        {item.paymentMethod}
                      </Typography>
                    </Box>
                  </Box>
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

export default ListIncomes;