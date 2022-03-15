import { Link } from "react-router-dom";
import "./product.css";
//import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Job</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                {/* <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div> */}
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                        <span className="productName">Job Name</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id:</span>
                            <span className="productInfoValue">101</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Description:</span>
                            <span className="productInfoValue">EFT.</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        {/* <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">no</span>
                  </div> */}
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Job Name</label>
                        <input type="text" placeholder=" Name of the job!" />
                        <label>Job Description</label>
                        <input type="text" placeholder=" Description of the job!" />
                        {/* <label>In Stock</label> */}
                        {/* <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select> */}
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">On</option>
                            <option value="no">Off</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        {/* <div className="productUpload">
                     <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div> */}
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}