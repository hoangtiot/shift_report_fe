import React from 'react';
import ItemList from '../../components/ItemList';

const CategoryList = () => {
  return (
    <ItemList
      apiUrl="http://localhost:8080/api/v1/category/"
      title="Categories"
      displayKeys={["id", "categoryName"]}
    />
  );
};

export default CategoryList;