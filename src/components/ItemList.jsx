import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ItemList = ({ apiUrl, title, displayKeys }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch items from ' + apiUrl);
        }
        const data = await response.json();
        setItems(data.data);
      } catch (error) {
        console.error('Error fetching items from ' + apiUrl + ':', error);
      }
    };

    fetchItems();
  }, [apiUrl]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {displayKeys.map((key) => (
                <TableCell key={key} align="left" style={{ padding: '16px', fontSize: '1.1rem', fontWeight: 'bold' }}>{key}</TableCell>
                              ))}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {items.map((item) => (
                              <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                style={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}
                              >
                                {displayKeys.map((key) => (
                                  <TableCell key={key} align="left" style={{ padding: '16px', fontSize: '1rem' }}>{item[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ItemList;