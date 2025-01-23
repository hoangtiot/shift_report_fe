import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Layout = () => {
  const [anchorElReports, setAnchorElReports] = useState(null);
  const [anchorElCategories, setAnchorElCategories] = useState(null);
  const [anchorElExpenses, setAnchorElExpenses] = useState(null);
  const [anchorElIncomes, setAnchorElIncomes] = useState(null);
  const [anchorElDebts, setAnchorElDebts] = useState(null);

  const openReportsMenu = Boolean(anchorElReports);
  const openCategoriesMenu = Boolean(anchorElCategories);
  const openExpensesMenu = Boolean(anchorElExpenses);
  const openIncomesMenu = Boolean(anchorElIncomes);
  const openDebtsMenu = Boolean(anchorElDebts);


  const handleReportsMenuOpen = (event) => {
    setAnchorElReports(event.currentTarget);
  };

  const handleReportsMenuClose = () => {
    setAnchorElReports(null);
  };

  const handleCategoriesMenuOpen = (event) => {
    setAnchorElCategories(event.currentTarget);
  };

  const handleCategoriesMenuClose = () => {
    setAnchorElCategories(null);
  };

  const handleExpensesMenuOpen = (event) => {
    setAnchorElExpenses(event.currentTarget);
  };

  const handleExpensesMenuClose = () => {
    setAnchorElExpenses(null);
  };

  const handleIncomesMenuOpen = (event) => {
    setAnchorElIncomes(event.currentTarget);
  };

  const handleIncomesMenuClose = () => {
    setAnchorElIncomes(null);
  };

  const handleDebtsMenuOpen = (event) => {
    setAnchorElDebts(event.currentTarget);
  };

  const handleDebtsMenuClose = () => {
    setAnchorElDebts(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shift Report UI
          </Typography>

          <Button color="inherit" onClick={handleReportsMenuOpen} aria-controls={openReportsMenu ? 'reports-menu' : undefined}aria-haspopup="true"aria-expanded={openReportsMenu ? 'true' : undefined}>
            Shift Reports
          </Button>
          <Menu id="reports-menu" anchorEl={anchorElReports} open={openReportsMenu} onClose={handleReportsMenuClose}MenuListProps={{'aria-labelledby': 'reports-button', }}>
            <MenuItem onClick={handleReportsMenuClose} component={Link} to="/reports">View List</MenuItem>
            <MenuItem onClick={handleReportsMenuClose} component={Link} to="/reports/new">Create New</MenuItem>
          </Menu>

          <Button color="inherit"  onClick={handleCategoriesMenuOpen} aria-controls={openCategoriesMenu ? 'categories-menu' : undefined}aria-haspopup="true"aria-expanded={openCategoriesMenu ? 'true' : undefined}>
            Categories
          </Button>
          <Menu id="categories-menu" anchorEl={anchorElCategories} open={openCategoriesMenu} onClose={handleCategoriesMenuClose}MenuListProps={{'aria-labelledby': 'categories-button', }}>
            <MenuItem onClick={handleCategoriesMenuClose} component={Link} to="/categories">View List</MenuItem>
            <MenuItem onClick={handleCategoriesMenuClose} component={Link} to="/categories/new">Create New</MenuItem>
          </Menu>

          <Button color="inherit"  onClick={handleExpensesMenuOpen} aria-controls={openExpensesMenu ? 'expenses-menu' : undefined}aria-haspopup="true"aria-expanded={openExpensesMenu ? 'true' : undefined}>
            Expenses
          </Button>
          <Menu id="expenses-menu" anchorEl={anchorElExpenses} open={openExpensesMenu} onClose={handleExpensesMenuClose}MenuListProps={{'aria-labelledby': 'expenses-button', }}>
            <MenuItem onClick={handleExpensesMenuClose} component={Link} to="/expenses">View List</MenuItem>
            <MenuItem onClick={handleExpensesMenuClose} component={Link} to="/expenses/new">Create New</MenuItem>
          </Menu>

          <Button color="inherit"  onClick={handleIncomesMenuOpen} aria-controls={openIncomesMenu ? 'incomes-menu' : undefined}aria-haspopup="true"aria-expanded={openIncomesMenu ? 'true' : undefined}>
            Incomes
          </Button>
          <Menu id="incomes-menu" anchorEl={anchorElIncomes} open={openIncomesMenu} onClose={handleIncomesMenuClose}MenuListProps={{'aria-labelledby': 'incomes-button', }}>
            <MenuItem onClick={handleIncomesMenuClose} component={Link} to="/incomes">View List</MenuItem>
            <MenuItem onClick={handleIncomesMenuClose} component={Link} to="/incomes/new">Create New</MenuItem>
          </Menu>

          <Button color="inherit"  onClick={handleDebtsMenuOpen} aria-controls={openDebtsMenu ? 'debts-menu' : undefined}aria-haspopup="true"aria-expanded={openDebtsMenu ? 'true' : undefined}>
            Debts
          </Button>
          <Menu id="debts-menu" anchorEl={anchorElDebts} open={openDebtsMenu} onClose={handleDebtsMenuClose}MenuListProps={{'aria-labelledby': 'debts-button', }}>
            <MenuItem onClick={handleDebtsMenuClose} component={Link} to="/debts">View List</MenuItem>
            <MenuItem onClick={handleDebtsMenuClose} component={Link} to="/debts/new">Create New</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
      <footer>
        <Typography variant="body2" align="center" sx={{ padding: '20px' }}>
          &copy; 2025 Shift Report
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;