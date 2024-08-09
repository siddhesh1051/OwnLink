import { Table } from "@mui/joy";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TiltCard from "./img/TiltCard.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [forcerender, setForcerender] = useState(false);
  const email = localStorage.getItem("email");

  const navigate = useNavigate();

  const cancelOrder = async (order_id) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/cancelOrder/${order_id}`
      );

      if (data.success === true) {
        setForcerender(!forcerender);
        toast.success("Order Cancelled Successfully");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API}/getOrders/${email}`
        );
        setMyOrders(data.orders);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMyOrders();
  }, [forcerender]);

  return (
    <div className="min-h-screen w-full bg-[#161a23] text-white flex flex-col gap-2 pt-8">
      <button onClick={() => navigate("/")} className="text-violet-300">
        Go Back
      </button>
      {myOrders.length !== 0 && (
        <h1 className="text-3xl font-[poppins] font-bold text-center mb-4">
          My Orders
        </h1>
      )}
      <div>
        {myOrders.length !== 0 ? (
          <Table
            aria-label="table variants"
            variant="plain"
            sx={{ color: "white" }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    width: "30%",
                    textAlign: "center",
                    backgroundColor: "black",
                  }}
                  className="md:text-xl text-sm font-bold "
                >
                  Order ID
                </th>
                <th
                  style={{ textAlign: "center", backgroundColor: "black" }}
                  className="md:text-xl text-sm font-bold "
                >
                  Product
                </th>
                <th
                  style={{ textAlign: "center", backgroundColor: "black" }}
                  className="md:text-xl text-sm font-bold "
                >
                  Product Name
                </th>
                <th
                  style={{ textAlign: "center", backgroundColor: "black" }}
                  className="md:text-xl text-sm font-bold "
                >
                  Amount
                </th>
                <th
                  style={{ textAlign: "center", backgroundColor: "black" }}
                  className="md:text-xl text-sm font-bold "
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((row) => (
                <tr key={row.order_id}>
                  <td className="md:text-lg text-[10px]">{row.order_id}</td>
                  <td>
                    <div className="flex justify-center">
                      <div className="flex flex-col justify-center">
                        <div className="flex justify-center">
                          <img
                            src={TiltCard}
                            alt="product"
                            className="md:h-[100px] md:w-[100px] w-[40px] h-[40px] object-contain hover:scale-110 duration-200"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="md:text-lg text-xs">{row.name}</td>
                  <td className="md:text-lg text-xs">{row.amount} ₹</td>
                  <td>
                    <button
                      className="md:px-4 md:py-2 px-2 py-1 bg-[#161a23] border-2 border-[#3f3354] rounded-lg hover:bg-[#423063] hover:text-[white] active:scale-95 duration-200 md:text-md text-[10px]"
                      onClick={() => cancelOrder(row.order_id)}
                    >
                      Cancel Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="flex justify-center items-center h-[80vh] text-gray-600">
            <h1 className="text-2xl font-bold">No Orders Placed Yet</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
