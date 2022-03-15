import "./topScheduler.css";

export default function TopScheduler() {
    return (
        <div className="newProduct">

            <form className="addProductForm">

                <div className="addProductItem">
                    <label>Name</label>
                    <select name="active" id="active">
                        <option value="job1">Job1</option>
                        <option value="job2">Job2</option>
                        <option value="job2">Job3</option>
                    </select>
                </div>

                <div className="addProductItem">
                    <label>Type</label>
                    <select name="active" id="active">
                        <option value="job1">Monthly</option>
                        <option value="job2">Weekly</option>
                        <option value="job2">Daily</option>
                        <option value="job2">Working Days</option>
                    </select>
                </div>

                <div className="addProductCheck">
                    <label>Day</label>




                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Monday   </label>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Tuesday   </label>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Wednesday   </label>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Thrusday   </label>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Friday   </label>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Saturday   </label>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Sunday</label>
                    </div>
                </div>
                {/* <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div> */}
                <div className="addProductItem">
                    <label>Time</label>
                    <input type="time" placeholder="Add Hours" />
                </div>
                <div className="addProductItem">
                    <button className="addProductButton">Add Schedule</button>
                </div>
            </form>
        </div>
    );
}