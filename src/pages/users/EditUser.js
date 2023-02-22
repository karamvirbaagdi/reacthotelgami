import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
const EditUser = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="userRegisterForm">
            <form className="form-inline" action="" method="post">
              <div className="form-group">
                <label className="sr-only" for="name">
                  Full Name:
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label className="sr-only" for="email">
                  Email address:
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label className="sr-only" for="pwd">
                  Password:
                </label>
                <input type="password" className="form-control" id="pwd" />
              </div>
              <div className="form-group">
                <label className="sr-only" for="pwd">
                  Phone Number:
                </label>
                <input type="number" className="form-control" id="pwd" />
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
export default EditUser;
