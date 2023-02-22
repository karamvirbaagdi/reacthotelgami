import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/css/style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./pages/users/UserAdd";
import ListUSer from "./pages/users/ListUser";
import EditUser from "./pages/users/EditUser";
import Dashboard from "./pages/Dahsboard";
import AddCategory from "./pages/category/addCategory";
import ListCategory from "./pages/category/listCategory";
import AddTags from "./pages/tags/addTags";
import ListTag from "./pages/tags/ListTag";

import AddProduct from "./pages/product/AddProduct";
import ListProduct from "./pages/product/listProduct";
import EditProduct from "./pages/product/editProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route exact path="/add-user" element={<AddUser />} />
          <Route exact path="/list-user" element={<ListUSer />} />
          <Route exact path="/edit-user" element={<EditUser />} />
          <Route exact path="/add-category" element={<AddCategory />} />
          <Route exact path="/add-tag" element={<AddTags />} />
          <Route exact path="/list-tag" element={<ListTag />} />
          <Route exact path="/list-categories" element={<ListCategory />} />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route exact path="/edit-product" element={<EditProduct />} />
          <Route exact path="/list-product" element={<ListProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
