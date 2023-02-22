import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
const addCategory = () =>{
  return (
    <>
      <Header />
        <div className='container'>
          <div className='row'>
            <form className="form_save_data" action="" method='post'>
            <div className="form-group">
                <label className="sr-only" for="name">Full Name:</label>
                <input type="text" className="form-control" id="email" />
              </div>
              
              <button type="submit" className="btn btn-primary mt-2" >Save</button>
            </form>
          </div>
        </div>
      <Footer />
    </>
    
  );
}
export default addCategory;