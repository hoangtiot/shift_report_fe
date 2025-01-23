import React from 'react';
import ItemList from '../../components/ItemList';

const DebtList = () => {
  return (
    <ItemList
      apiUrl="http://localhost:8080/api/v1/debt/"
      title="Debts"
      displayKeys={["id", "debtorName", "amount"]}
    />
  );
};

export default DebtList;