import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { useState, React } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserAdd = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3030/api/user/register", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          phone: phone,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let resJson = await res.json();
      console.log("resJson", resJson);
      if (resJson.status === 200) {
        toast.success("user Added sucessfully.");
      } else {
        toast.error("Product not Added.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="userRegisterForm">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <form
              className="form-inline"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label className="sr-only" for="name">
                  Full Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="form-group">
                <label className="sr-only" for="email">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label className="sr-only" for="pwd">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="form-group">
                <label className="sr-only" for="number">
                  Phone Number:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="number"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>

              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default UserAdd;
