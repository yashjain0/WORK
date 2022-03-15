import "./scheduletop.css";

export default function NewProduct() {
    return (
        <div className="newProduct">

            <form className="addProductForm">

                <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Job Name" />
                </div>
                <div className="addProductItem">
                    <label>Job Id</label>
                    <input type="text" placeholder="Id of the job, which schedule need to see." />
                </div>

                {/* <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div> */}
                <div className="addProductItem">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">On</option>
                        <option value="no">Off</option>
                    </select>
                </div>
                {/*<button className="addProductButton">Create</button>*/}
            </form>
        </div>
    );
}