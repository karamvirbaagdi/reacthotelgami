import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from "react-router-dom";

const ListTags = () => {
  const [tagdata, setTagdata] = useState([]);
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        };

        const url = "http://localhost:3030/api/tag/list";
        const response = await fetch(url, requestOptions);
        const json = await response.json();
        console.log(json.data);
        setTagdata(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

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
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tagdata.map((item, index) => (
                  <>
                    <tr>
                      <td>Image</td>
                      <td>{item.Name}</td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                      </td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
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
export default ListTags;
