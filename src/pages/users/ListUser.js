import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ListUSer = () => {
  const [advice, setAdvice] = useState([]);
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        };

        const url = "http://localhost:3030/api/user/list";
        const response = await fetch(url, requestOptions);
        const json = await response.json();
        console.log(json.data);
        setAdvice(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  let handleDelete = async (userId) => {
    //console.log("userId", userId);
    try {
      let res = await fetch(
        "http://localhost:3030/api/" + userId + "/user/delete",
        {
          method: "POST",
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let resJson = await res.json();
      console.log("resJson", resJson);
      if (resJson.status === 200) {
        toast.success("user deleted sucessfully.");
        setTimeout(function () {
          window.location.reload();
        }, 3000);
      } else {
        toast.error("user not deleted.");
      }
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {advice.map((item, index) => (
                  <>
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Email}</td>
                      <td>{item.phoneNumber}</td>
                      <td>
                        <Link
                          className="btn btn-danger"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ListUSer;
