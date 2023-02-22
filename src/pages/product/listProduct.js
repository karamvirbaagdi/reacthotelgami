import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const ListProduct = () => {
  const [productdata, setProductdata] = useState([]);
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        };

        const url = "http://localhost:3030/api/product/list";
        const response = await fetch(url, requestOptions);
        const json = await response.json();
        console.log(json.data);
        setProductdata(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  async function handleDelete() {}
  return (
    <>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Sku</th>
                  <th>Categories</th>
                  <th>Tags</th>
                  <th>Price</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {productdata.map((item, index) => (
                  <>
                    <tr>
                      <td>Image</td>
                      <td>{item.Title}</td>
                      <td>{item.Description}</td>
                      <td>{item.Sku}</td>
                      <td>{item.Categories}</td>
                      <td>{item.Tags}</td>
                      <td>{item.Price}$</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
            <div className="pagnetion"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default ListProduct;
