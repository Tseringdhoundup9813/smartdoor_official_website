import React,{useEffect,useState} from 'react'
//css
import '../../style/customerquery.css';

//navbar
import AdminNavbar from '../AdminNavbar'
//footer
import AdminTop from '../AdminTop'
import axios from 'axios';


export default function Chats() {
    const[customer_message,set_customer_message]=useState();
    useEffect(()=>{
        GetMessage();
    },[])

    // Get a list of message from server ==================================
      async function GetMessage(){
        try{
          console.log("working");
          const response = await axios.get("http://localhost:3001/getusermessage");
          console.log(response.data.data);
          set_customer_message(response.data.data);

        }catch(err){
            console.log(err);
        }
      }


    // END======================================================================




  // DeleteMessage ===============================
   async function DeleteMessage(){

   }
  // +======================END=========================


  // ==================END=======================================
  return (
    <div>
       <div className="row row-admin">
              <AdminNavbar></AdminNavbar>
              <div className="col-md-10 col-sm-12 admin-main">
                  <AdminTop></AdminTop>


                    {/* customer message =================================================== */}

                    <div className='customer-message-container'>
                      {customer_message&&customer_message.map((message,key)=>{
                         
                             return <div className='customer-message-list'>
                              <div>
                                <li>{message.name}</li>
                                <li>{message.email}</li>
                                <li>{message.phone}</li>
                                <li>Date</li>
    
                                <li><i class="fa-regular fa-circle-check"></i></li>
                                <li onClick={DeleteMessage}className='delete_message'><i class="fa-solid fa-trash"></i></li>
                              </div>
                                <div className='customer-message'>
                                  <p>{message.message}</p>
                                </div>
    
                            </div>
    
                      })}
                      
                      </div>
                     
                      {/* END ====================================== */}




              </div>
          </div>
    </div>
  )
}
