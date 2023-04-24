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
    const[customer_message_delete_status,set_customer_message_delete_status] = useState();
    const[check,set_check] = useState();
    useEffect(()=>{
        GetMessage();
        
      // Get a list of message from server ==================================
        async function GetMessage(){
          try{
            const response = await axios.get("https://node.smartdoors.com.np/getusermessage");
            set_customer_message(response.data.data);
            console.log("working api")

          }catch(err){
              console.log(err);
          }
        }


      // END======================================================================


        // check varaible to false when it true after a second
        if(check==true){
          setTimeout(function(){
            set_check(false);
          },1000)
        }
        
        // customer messate delete statuc change to false when it get true after a second
        if(customer_message_delete_status==true){
          setTimeout(function(){
            set_customer_message_delete_status(false);
          },1000)
        }


    },[customer_message_delete_status,check])





  // DeleteMessage ===============================
   async function DeleteMessage(_id){
      try{
     
        const response = await axios.get(`https://node.smartdoors.com.np/customermessagedelete/${_id}`);
        
        if(response.data.deletedCount==1){
          set_customer_message_delete_status(true);
        }


      }catch(err){
          console.log(err);
      }
   }
  // +======================END=========================

  // Customer message Solve ===================================================================
   async function CustomerSolveSubmit(_id){
    try{
      
      const response = await axios.get(`https://node.smartdoors.com.np/customermessagesolve/${_id}`);
      set_check(response.data.check);
      window.location.reload(true)
    
    }catch(err){
        console.log(err);
    }
   }
  // =====================END+===========================================================


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
                         
                             return <div  key={key}className='customer-message-list'>
                              <div>
                                <li>{message.name}</li>
                                <li>{message.email}</li>
                                <li>{message.phone}</li>
                                <li>{message.createdAt}</li>
    
                                <li className='solve' onClick={()=>CustomerSolveSubmit(message._id)}><i style={{color:`${message.solve?"green":""}`}} class="fa-regular fa-circle-check"></i></li>
                                <li onClick={()=>DeleteMessage(message._id)}className='delete_message'><i  class="fa-solid fa-trash"></i></li>
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
