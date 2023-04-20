import React from 'react'
//css
import '../../style/customerquery.css';

//navbar
import AdminNavbar from '../AdminNavbar'
//footer
import AdminTop from '../AdminTop'

export default function Chats() {


  // when click show customer message ========================
   function ShowCustomerMessage(){
      const customer_message = document.querySelector(".customer-message").querySelector("p")
      console.log(customer_message);
      customer_message.style.display = "block";
   }

  // ==================END=======================================
  return (
    <div>
       <div className="row row-admin">
              <AdminNavbar></AdminNavbar>
              <div className="col-md-10 col-sm-12 admin-main">
                  <AdminTop></AdminTop>


                    {/* customer message =================================================== */}

                      <div className='customer-message-container'>
                        <div className='customer-message-list'>
                          <ul>
                            <li>name</li>
                            <li>name</li>
                            <li>name</li>
                            <li>name</li>
                            <li onClick={ShowCustomerMessage}className='show_message'>+</li>
                          </ul>
                            <div className='customer-message'>
                              <p>lokflasdkf lfkasld flk aslfklsdakf lkafsdl fl flaksdlf </p>
                            </div>

                        </div>

                      </div>

                      {/* END ====================================== */}
                      <div className='customer-message-container'>
                        <div className='customer-message-list'>
                          <ul>
                            <li>name</li>
                            <li>name</li>
                            <li>name</li>
                            <li>name</li>
                            <li onClick={ShowCustomerMessage}className='show_message'>+</li>
                          </ul>
                            <div className='customer-message'>
                              <p>lokflasdkf lfkasld flk aslfklsdakf lkafsdl fl flaksdlf </p>
                            </div>

                        </div>

                      </div>




              </div>
          </div>
    </div>
  )
}
