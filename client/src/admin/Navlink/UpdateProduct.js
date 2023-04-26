import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

//css
import "../../style/aadmin.css";
import { useParams, Navigate } from "react-router-dom";

//navbar
import AdminNavbar from "../AdminNavbar";
//footer
import AdminTop from "../AdminTop";

function UpdateProduct() {
  const { productId } = useParams();
  const [product, setproduct] = useState();
  const [message, setMessage] = useState("");
  const[img_index,set_img_index] =useState("");

  const [productupload, setproductupload] = useState({
    name: "",
    description: "",
    price: "",
    img:[],
    categories: "3D DOORS",
    color: "rose wood",
    size: "80-32",
    discount: "0",
  });
       




  useEffect(() => {
     
    
    productDetail();
    // message get value set message to nothing after a second
    if (message==false) {
      setTimeout(function () {
        setMessage("");
      }, 10000);


    }
    if(message){
      window.location.reload(true)
    }

    // end========================================
  },[message]);

  
  // sucessfully updated

  async function productDetail() {
    try {
      const product = await axios.get(
        `https://node.smartdoors.com.np/productdetail/${productId}`
      );
      setproduct(product.data.data);

      setproductupload({
        name: product.data.data.name,
        description:product.data.data.description,
        price:product.data.data.price,
        img:[product.data.data.img[0]],
        categories:product.data.data.categories,
        color:product.data.data.colors,
        size:product.data.data.size,
        discount:product.data.data.discount,

      })


      // set set product value

      //
    } catch (err) {
      console.log(err);
    }
  }

  const  onSubmit = (e) => {
    e.preventDefault();
    console.log(productupload);
    const formdata = new FormData();
 
    formdata.append("name", productupload.name);
    formdata.append("description", productupload.description);
    formdata.append("price", productupload.price);
    formdata.append("discount", productupload.discount);
    {
      for (var a = 0; a < productupload.img.length; a++) {
      
        formdata.append("testImage", productupload.img[a]);
      }
    }
    formdata.append("categories", productupload.categories);
    formdata.append("colors", productupload.color);
    formdata.append("size", productupload.size);
    
   
 
    axios.post(`https://node.smartdoors.com.np/productupdate/${productId}`,formdata,{})
      .then((res) => {
        setMessage(res.data.success);
     
      })
      .catch((err) => {
        console.log(err);
        setMessage("Product is not Uploaded try again");
        // product successfully upload tick to red
        const tick = document.querySelector(".fa-circle-check");
      
        tick.style.color ="red";
        //
      });
  };

  return (
    <div>
      <div className="row row-admin">
        <AdminNavbar></AdminNavbar>
        <div className="col-md-10 col-sm-12 admin-main">
          <AdminTop></AdminTop>
          <form onSubmit={onSubmit}>
            <div className="row-uproduct row">
              {/* admin message =============== */}
              <h1
                className="admin-message"
                style={{ opacity: `${message? "1" : "0"}` }}
              >
                <i class="fa-regular fa-circle-check" ></i>Successfully updateded
              </h1>
              {/* =============END==================== */}

              <div className="col d-flex align-items-center justify-content-between">
                <NavLink to="/admin/products">
                  <div className="up-back-btn btn">Go back</div>
                </NavLink>
                <div className="up-title">Update Product</div>
                <div>
                  <button className="btn btn-primary" type="submit">
                    Upload
                  </button>
                </div>
              </div>
            </div>
            <div className="row w-90 mx-auto">
              <div className="col-7 up-input">
                <div className="up-product-title">
                  <label className=" text-capitalize">Product title</label>
                  <input
                    className="mb-2 form-control"
                    type="text"
                    name="input_value"
                    required
                    defaultValue={product && product.name}
                    onChange={(e) =>
                      setproductupload({
                        ...productupload,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="up-product-title">
                  <label className=" text-capitalize">Price</label>
                  <input
                    className="mb-2 form-control"
                    type="number"
                    name="input_value"
                    required
                    defaultValue={product && product.price}
                    onChange={(e) =>
                      setproductupload({
                        ...productupload,
                        price: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="up-size">
                  <div className="up-size ">
                    <label className=" text-capitalize ">Size : </label>
                    <select
                      className="form-control mb-2"
                      onChange={(e) =>
                        setproductupload({
                          ...productupload,
                          size: e.target.value,
                        })
                      }
                      name="input_value"
                      id="upSize"
                      required
                      defaultValue={product && product.size}
                    >
                      <option value={product && product.size} selected>
                        {product && product.size}
                      </option>

                      <option value="80-32">80 * 32</option>
                      <option value="80-26">80 * 26</option>
                      <option value="75-26">75 * 26</option>
                      <option value="72-26">72 * 26</option>
                      <option value="72-26">72 * 26</option>
                      <option value="80-38">80 * 38</option>
                      <option value="DD80-19">DD80 * 19</option>
                      <option value="DD80-22">DD80 * 22</option>
                    </select>
                  </div>
                  <div className="up-cat">
                    <label className="text-capitalize ">Categories : </label>
                    <select
                      id="cars"
                      onChange={(e) =>
                        setproductupload({
                          ...productupload,
                          categories: e.target.value,
                        })
                      }
                      className="form-control mb-2"
                      required
                      defaultValue={product && product.categories}
                      name="input_value"
                    >
                      <option value={product && product.categories} selected>
                        {product && product.categories}
                      </option>

                      <option value="3D DOORS">3d doors</option>
                      <option value="DOUBLE DOORS">Double doors</option>
                      <option value="CANADA DOORS">Canadian doors</option>
                      <option value="MEMBRANE DOORS">Membrance doors</option>
                    </select>
                  </div>
                </div>

                <div className="up-product-title">
                  <label className=" text-capitalize">color</label>
                  {/* color ======================== */}
                  <select
                    id="cars"
                    className="form-control"
                    name="input_value"
                    required
                    defaultValue={product && product.color}
                    onChange={(e) =>
                      setproductupload({
                        ...productupload,
                        color: e.target.value,
                      })
                    }
                  >
                    <option value={product && product.colors}>
                      {product && product.colors}
                    </option>
                    <option value="rose wood">Rose Wood</option>
                    <option value="andrateak">Andrateak</option>
                  </select>
                </div>
                <div className="up-product-title">
                  <label className=" text-capitalize">Discount</label>
                  <input
                    className="mb-2 form-control"
                    name="input_value"
                    placeholder={"optinal"}
                    type="number"
                    min="1"
                    max="100"
                    defaultValue={product && product.discount}
                    onChange={(e) =>
                      setproductupload({
                        ...productupload,
                        discount: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="up-product-title">
                  <label className=" text-capitalize">description</label>
                  <textarea
                    className="form-control"
                    defaultValue={product && product.description}
                    name="input_value"
                    id=""
                    cols="30"
                    rows="10"
                    onChange={(e) =>
                      setproductupload({
                        ...productupload,
                        description: e.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-5 up-img">
                <div className="front-img">
                  <div
                    className="img front_image_upload"
                    style={{
                      backgroundImage: `url(${product && product.img[0]})`,
                    }}
                  ></div>
                  <div className="img-upload">
                    <input
                      type="file"
                      name="testImage"
                      className="front-image"
                      onChange={(e) =>
                        
                        setproductupload({
                          ...productupload,
                          img: [...productupload.img,e.target.files[0]],
                        })

                      }
                    />
                  </div>
                </div>

                {/* <div className="back-img">
                  <div
                    className="img   front_image_upload "
                    id="back_img"
                    style={{
                      backgroundImage: `url(${product && product.img[1]})`,
                    }}
                  ></div>
                  {/* <div className="img-upload">
                    <input
                      type="file"
                      name="testImage"
                      className="back-image"
                      onChange={(e) =>
                        setproductupload({
                          ...productupload,
                              img:[...productupload.img,e.target.files[0]],
                        })
                      }
                    />
                  </div> */}
                {/* </div> */} 
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
