import { Link } from "react-router-dom";
import "./create.css";
import { Publish } from "@material-ui/icons";

export default function Create() {
    return (
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Job</h1>
          <Link to="/newproduct">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
    </div>

);
}