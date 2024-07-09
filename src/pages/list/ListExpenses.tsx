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
    categoryName: "TT HD BIA",
    content: "2 tiger bạc, 2 heiniken",
    amount: "1730000",
    date: "21/3/2024"
  },
  {
    id: "2",
    categoryName: "TT HD tiền nước tháng",
    content: "",
    amount: " 515372",
    date: "21/3/2024"
  },
  {
    id: "3",
    categoryName: "TT HD Tré",
    content: "",
    amount: "455000",
    date: "21/3/2024"
  }
];

const ListExpenses = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <BaseCard title="List Expenses">
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
                  Category name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Content
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
                        {item.categoryName}
                      </Typography>
                      <Typography color="textSecondary" fontSize="13px">
                        {item.categoryName}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {item.content}
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

export default ListExpenses;