import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUerData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [tagData, setTagData] = useState([]);

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const fetchUserData = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        };

        const url = "http://localhost:3030/api/user/count";
        const response = await fetch(url, requestOptions);
        const json = await response.json();
        setUerData(json.data);
        console.log("userdata", json.data);
      } catch (error) {
        setUerData("0");
      }
    };

    const fetchProductData = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        };

        const url = "http://localhost:3030/api/product/count";
        const response = await fetch(url, requestOptions);
        const json = await response.json();
        setProductData(json.data);
        console.log("product", json.data);
      } catch (error) {
        setProductData("0");
      }
    };

    const fetchCategoryData = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        };

        const url = "http://localhost:3030/api/category/count";
        const response = await fetch(url, requestOptions);
        const json = await response.json();
        setCategoryData(json.data);
        console.log("category", json.data);
      } catch (error) {
        setCategoryData("0");
      }
    };

    const fetchTagData = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        };

        const url = "http://localhost:3030/api/tag/count";
        const response = await fetch(url, requestOptions);
        const json = await response.json();
        setTagData(json.data);
        console.log("tags", json.data);
      } catch (error) {
        setTagData("0");
      }
    };
    fetchTagData();
    fetchCategoryData();
    fetchProductData();
    fetchUserData();
  }, []);
  return (
    <>
      <Header />
      <div className="container dashboarContainer">
        <div className="row">
          <div className="col-lg-12">
            <Link to="/list-product">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 bg-primary p-4 text-white dashboardwidgit">
                <h1>{productData}</h1>
                <h3>Total Products</h3>
              </div>
            </Link>
            <Link to="/list-user">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 bg-info p-4 text-white pull-left dashboardwidgit">
                <h1>{userData}</h1>
                <h3>Total Users</h3>
              </div>
            </Link>
            <Link to="/list-categories">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 bg-secondary p-4 text-white pull-left dashboardwidgit">
                <h1>{categoryData}</h1>
                <h3>Total Categories</h3>
              </div>
            </Link>
            <Link to="/list-tag">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 bg-dark p-4 text-white pull-left dashboardwidgit">
                <h1>{tagData}</h1>
                <h3>Total Tags</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Dashboard;
