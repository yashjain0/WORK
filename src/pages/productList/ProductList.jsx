import "./productList.css";
import "./product.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Create from "../create/Create"

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: "Job",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">

            {params.row.name}
          </div>
        );
      },
    },
    { field: "description", headerName: "Description", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      }
    },

    {
      field: "schedules",
      headerName: "Schedules",
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/schedule/" + params.row.id}>
              <button className="productListEdit">View Schedules</button>
            </Link>

          </div>
        );
      },
    },
  ];

  return (

    <div className='col'>
      <div>
        <Create />
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