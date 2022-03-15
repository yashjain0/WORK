import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Job</h1>
      <form className="addProductForm">
        {/* <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div> */}
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Job Name" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="Info about job." />
        </div>
        <div className="addProductItem">
          <label>Schedule It!</label>
          <input type="time" placeholder="Schedule it" />
        </div>
        {/* <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div> */}
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}