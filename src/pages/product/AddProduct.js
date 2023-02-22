import { useState, React } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");
  const [categories, setCategories] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3030/api/product/add", {
        method: "POST",
        body: JSON.stringify({
          Title: title,
          Description: description,
          Sku: sku,
          Categories: "63c37c198cb261292d3c7ad5",
          Tags: "63c24296d1e41aee4912f6b4",
          Image: "jhjh",
          Price: price,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let resJson = await res.json();
      console.log("resJson", resJson);
      if (resJson.status === 200) {
        toast.success("Product Added sucessfully.");
      } else {
        toast.error("Product not added. Please check again.");
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
            <form className="form-inline" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="sr-only" for="Image">
                  Image
                </label>
                <input
                  type="file"
                  name="Image"
                  className="form-control"
                  id="Image"
                />
              </div>
              <div className="form-group">
                <label className="sr-only" for="name">
                  Name:
                </label>
                <input
                  type="text"
                  name="Title"
                  className="form-control"
                  id="name"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                />
              </div>
              <div className="form-group">
                <label className="sr-only" for="Description">
                  Description:
                </label>
                <textarea
                  name="Description"
                  id="Description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label className="sr-only" for="Sku">
                  Sku:
                </label>
                <input
                  type="text"
                  name="Sku"
                  className="form-control"
                  id="Sku"
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="sr-only" for="Price">
                  Price($):
                </label>
                <input
                  type="number"
                  name="Price"
                  className="form-control"
                  id="Price"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className="sr-only" for="Price">
                  Categories:
                </label>
                <select
                  name="Categories"
                  class="form-select"
                  onChange={(e) => setCategories(e.target.value)}
                >
                  <option values="63c37bfc8cb261292d3c7ad3">Car Name</option>
                  <option values="63c37c198cb261292d3c7ad5">Bike</option>
                  <option values="63c37e4b07045895045beb6b">Bike Race</option>
                </select>
              </div>
              <div className="form-group">
                <label className="sr-only" for="Price">
                  Tags:
                </label>
                <select
                  name="Tags"
                  class="form-select"
                  onChange={(e) => setTags(e.target.value)}
                  value={tags}
                >
                  <option values="63c24296d1e41aee4912f6b4">Hotel Gmai</option>
                  <option values="63c245309adccf7135f606c6">
                    Maha Raja Chonwk
                  </option>
                </select>
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
export default AddProduct;
