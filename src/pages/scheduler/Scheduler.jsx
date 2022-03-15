import "./scheduler.css";
//import "./product.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import TopScheduler from "../topScheduler/TopScheduler"

export default function Scheduler() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "sid", headerName: "ScheduleID", width: 150 },
        { field: "id", headerName: "JobID", width: 120 },
        // {
        //     field: "product",
        //     headerName: "Job",
        //     width: 200,
        //     renderCell: (params) => {
        //         return (
        //             <div className="productListItem">

        //                 {params.row.name}
        //             </div>
        //         );
        //     },
        // },

        { field: "Type", headerName: "Category", width: 150 },
        { field: "DayBitMap", headerName: "Day Bit Map", width: 180 },
        {
            field: "hours",
            headerName: "Time",
            width: 120,
        },
        {
            field: "sstatus",
            headerName: "Schedule Status",
            width: 180,
        },
        {
            field: "status",
            headerName: "Job Status",
            width: 180,
        },

        // {
        //     field: "action",
        //     headerName: "Edit",
        //     width: 150,
        //     renderCell: (params) => {
        //         return (
        //             <div>
        //                 <Link to={"/scheduler/" + params.row.id}>
        //                     <button className="productListEdit">Edit</button>
        //                 </Link>
        //                 <DeleteOutline
        //                     className="productListDelete"
        //                     onClick={() => handleDelete(params.row.id)}
        //                 />
        //             </div>
        //         );
        //     }
        // },


    ];

    return (

        <div className='col'>
            <div>
                <TopScheduler />
            </div>
            <div className="productList">
                <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={8}
                    checkboxSelection
                />
            </div>
        </div>

    );
}