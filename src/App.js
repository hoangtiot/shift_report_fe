import Home from "./pages/home/Home";
import List from "./pages/list/List";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Root from "./routes/root";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "reports",
        element: <ListReports />,
      },
      { path: "reports/:reportId", element: <Single /> },
      { path: "reports/new", element: <NewReport /> },
      {
        path: "categories",
        element: <ListCategories />,
      },
      { path: "categories/:catId", element: <Single /> },
      { path: "categories/new", element: <NewCategory /> },
      {
        path: "expenses",
        element: <ListExpenses />,
      },
      { path: "expenses/:reportId", element: <Single /> },
      { path: "expenses/new", element: <NewExpense /> },
      {
        path: "incomes",
        element: <ListIncomes />,
      },
      { path: "incomes/:incomeId", element: <Single /> },
      { path: "incomes/new", element: <NewIncome /> },
      {
        path: "debts",
        element: <ListDebts />,
      },
      { path: "debts/:debtId", element: <Single /> },
      { path: "debts/new", element: <NewDebt /> },
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
