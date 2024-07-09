import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "../pages/components/layout/sidebar/Sidebar";

export default function Root() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
    {/* <Sidebar
        isSidebarOpen={isSidebarOpen}/> */}
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
              <Link to={`/reports/1`}>Single</Link>
              <Link to={`/reports/new`}>New</Link>
            </li>
            <li>
              <Link to={`/categories`}>Categories</Link>
              <Link to={`/categories/1`}>Single</Link>
              <Link to={`/categories/new`}>New</Link>
            </li>
            <li>
              <Link to={`/expenses`}>Expenses</Link>
              <Link to={`/expenses/1`}>Single</Link>
              <Link to={`/expenses/new`}>New</Link>
            </li>
            <li>
              <Link to={`/incomes`}>Incomes</Link>
              <Link to={`/incomes/1`}>Single</Link>
              <Link to={`/incomes/new`}>New</Link>
            </li>
            <li>
              <Link to={`/debts`}>Debts</Link>
              <Link to={`/debts/1`}>Single</Link>
              <Link to={`/debts/new`}>New</Link>
            </li>
          </ul>
        </nav>
        
      </div>
      <div id="detail"><Outlet/></div>
    </>
  );
}