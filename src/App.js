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
      { path: "reports/new", element: <New /> },
      {
        path: "categories",
        element: <ListCategories />,
      },
      { path: "categories/:catId", element: <Single /> },
      { path: "categories/new", element: <New /> },
      {
        path: "expenses",
        element: <ListExpenses />,
      },
      { path: "expenses/:reportId", element: <Single /> },
      { path: "expenses/new", element: <New /> },
      {
        path: "incomes",
        element: <ListIncomes />,
      },
      { path: "incomes/:incomeId", element: <Single /> },
      { path: "incomes/new", element: <New /> },
      {
        path: "debts",
        element: <ListDebts />,
      },
      { path: "debts/:debtId", element: <Single /> },
      { path: "debts/new", element: <New /> },
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
