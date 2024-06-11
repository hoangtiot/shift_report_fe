import Home from "./pages/home/Home";
import List from "./pages/list/List";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Root from "./routes/root";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "reports",
        element: <List />,
      },
      { path: "reports/:reportId", element: <Single /> },
      { path: "reports/new", element: <New /> },
      {
        path: "expenses",
        element: <List />,
      },
      { path: "expenses/:reportId", element: <Single /> },
      { path: "expenses/new", element: <New /> },
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
