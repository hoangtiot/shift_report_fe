import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Single from "./pages/single/Single";
import ErrorPage from "./error-page";
import ListCategories from "./pages/list/ListCategories.tsx";
import ListExpenses from "./pages/list/ListExpenses.tsx";
import ListReports from "./pages/list/ListReports.tsx";
import ListIncomes from "./pages/list/ListIncomes.tsx";
import ListDebts from "./pages/list/ListDebts.tsx";
import NewCategory from "./pages/new/NewCategory.tsx";
import NewReport from "./pages/new/NewReport.tsx";
import NewExpense from "./pages/new/NewExpense.tsx";
import NewIncome from "./pages/new/NewIncome.tsx";
import NewDebt from "./pages/new/NewDebt.tsx";
import Layout from "./components/Layout";
import ReportList from "./pages/reports/ReportList";
import CategoryList from "./pages/categories/CategoryList";
import ExpenseList from "./pages/expenses/ExpenseList";
import IncomeList from "./pages/incomes/IncomeList";
import DebtList from "./pages/debts/DebtList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "reports/:reportId", element: <Single /> },
      {
        path: "reports",
        element: <ReportList />,
        children: [{ path: "new", element: <NewReport /> }],
      },
      {
        path: "categories",
        element: <CategoryList />,
        children: [{ path: "new", element: <NewCategory /> }],
      },
      { path: "categories/:catId", element: <Single /> },
      {
        path: "expenses",
        element: <ExpenseList />,
        children: [{ path: "new", element: <NewExpense /> }],
      },
      { path: "expenses/:reportId", element: <Single /> },
      {
        path: "incomes",
        element: <IncomeList />,
        children: [{ path: "new", element: <NewIncome /> }],
      },
      { path: "incomes/:incomeId", element: <Single /> },
      {
        path: "debts",
        element: <DebtList />,
        children: [{ path: "new", element: <NewDebt /> }],
      },
      { path: "debts/:debtId", element: <Single /> },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
