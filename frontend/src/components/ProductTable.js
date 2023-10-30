import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableHead, TableBody, TableRow, TableCell, Button, Input, Select } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [nameFilter, setNameFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');


  useEffect(() => {
    axios.get('http://localhost:3030/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (direction === 'asc') {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  const handleFilter = () => {
    let filtered = [...products];

    if (nameFilter) {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(nameFilter.toLowerCase()));
    }

    if (categoryFilter) {
      filtered = filtered.filter(product => product.category.toLowerCase() === categoryFilter.toLowerCase());
    }

    setFilteredProducts(filtered);
  };

  const handleDelete = (productId) => {
    axios.delete(`http://localhost:3030/products/${productId}`)
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error('Error deleting product:', error));
  };

  return (
    <div>
      <div>
        <Input
          placeholder="Filter by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <Select
          native
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">Filter by category</option>
          <option value="Appliances">Appliances</option>
          <option value="Furniture">Furniture</option>
          <option value="Refrigerators">Refrigerators</option>
          <option value="Smartphones">Smartphones</option>
          <option value="Electronics">Electronics</option>
        </Select>
        <Button onClick={handleFilter}>Apply Filters</Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell onClick={() => handleSort('name')}>Product Name</TableCell>
            <TableCell onClick={() => handleSort('description')}>Description</TableCell>
            <TableCell onClick={() => handleSort('category')}>Category</TableCell>
            <TableCell onClick={() => handleSort('price')}>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredProducts.map(product => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <Button
                  startIcon={<DeleteOutlined />}
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;