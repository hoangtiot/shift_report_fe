import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>Shift Report</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/reports`}>Shift Report</Link>
            </li>
            <li>
              <Link to={`/expenses`}>Expense</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"><Outlet/></div>
    </>
  );
}