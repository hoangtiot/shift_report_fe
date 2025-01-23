import React from 'react';
import ItemList from '../../components/ItemList';

const IncomeList = () => {
  return (
    <ItemList
      apiUrl="http://localhost:8080/api/v1/income/"
      title="Incomes"
      displayKeys={["id", "amount"]}
    />
  );
};

export default IncomeList;