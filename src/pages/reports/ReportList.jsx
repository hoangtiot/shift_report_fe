import React from 'react';
import ItemList from '../../components/ItemList';

const ReportList = () => {
  return (
    <ItemList
      apiUrl="http://localhost:8080/api/v1/shift_report/"
      title="Shift Reports"
      displayKeys={["id", "time"]}
    />
  );
};

export default ReportList;