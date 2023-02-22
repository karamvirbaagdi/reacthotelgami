import { useState, React } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
const AddTags = () => {
  const [name, setName] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const [sucessmessage, setSucessmessage] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3030/api/tag/add", {
        method: "POST",
        body: JSON.stringify({
          name: name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let resJson = await res.json();
      console.log("resJson", resJson);
      if (resJson.status === 200) {
        setSucessmessage("Tag Added sucessfully.");
        setErrormessage("");
      } else {
        setErrormessage("Some error occured. Please try again.");
        setSucessmessage("");
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
            <form className="form-inline" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="sr-only" for="name">
                  Tag Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </form>
            <br />
            <div class="alert alert-info" role="alert">
              {errormessage}
              {sucessmessage}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AddTags;
