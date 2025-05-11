// GET all products

import axios from "axios";

// https://fakestoreapi.com/products
// GET single product by ID

// https://fakestoreapi.com/products/:id
// GET all categories

// https://fakestoreapi.com/products/categories
// GET products in a specific category

// https://fakestoreapi.com/products/category/:category

// Users
// GET all users


// https://fakestoreapi.com/users
// GET single user


// https://fakestoreapi.com/users/:id
// POST create user


// https://fakestoreapi.com/users

// Authentication
// POST login (returns token)

// https://fakestoreapi.com/auth/login
// Body:

// {
//   "username": "mor_2314",
//   "password": "83r5^_"

const api = axios.create({
    baseUrl: 'https://fakestoreapi.com',
    timeout: 5000
})