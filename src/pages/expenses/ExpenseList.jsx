import React from 'react';
import ItemList from '../../components/ItemList';

const ExpenseList = () => {
  return (
    <ItemList
      apiUrl="http://localhost:8080/api/v1/expense/"
      title="Expenses"
      displayKeys={["id", "amount"]}
    />
  );
};

export default ExpenseList;