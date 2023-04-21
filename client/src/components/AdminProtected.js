import React,{useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function AdminProtected(props) {
    const{Component} = props
    const navigate = useNavigate();
    // const location = useLocation();
    useEffect(()=>{
    
       if(localStorage.getItem("user_id")!==null){
           CheckAdmin();
       }else{
        
        navigate("/")
       }



       async function CheckAdmin(){
            try{
                console.log("api working");
                console.log(localStorage.getItem("user_id"));
                const product = await axios.get(`https://node.smartdoors.com.np/checkadmin/${localStorage.getItem("user_id")}`)
                console.log(product);
                if(!product.data.admin){
                    navigate("/")
                }  
            }catch(err){
               console.log(err);
               navigate("/")
            }
       }
      
      
    })
  return (

    <Component></Component>
    
  )
}

export default AdminProtected