import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
const ListTags = () =>{
  return (
    <div className='container-fulid'>
          <div className='row'>
            <div className='col-3' id='sideBarBootstrap'>
            </div>
            <div className='col-9 p-0'>
            <Header/>
            <h5>List Tags</h5>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                </tr>
                <tr>
                  <td>Mary</td>
                  <td>Moe</td>
                  <td>mary@example.com</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>Dooley</td>
                  <td>july@example.com</td>
                </tr>
              </tbody>
            </table>
            <Footer/>
            </div>
          </div>
      </div>
    
  );
}
export default ListTags;