import React from "react";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import CheckTrack from "../Components/CheckTrack";
import { useNavigate } from "react-router-dom";

export default function TrackOrd() {
  const [track, setTrack] = React.useState(true);
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [data, setData] = useState();
  const navigate = useNavigate();

  const trackOrd = () => {
    fetch("http://localhost:5000/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify JSON content type
      },
      body: JSON.stringify({ phone, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the JSON response
        } else {
          throw new Error("Failed to track order me-2");
        }
      })
      .then((data) => {
        if (data && data.length > 0) {
          setData(data);
        } else {
          alert("Invalid Phone No Or Password");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center fw-bold mt-3">Your Orders</h1>
      {track ? (
        <CheckTrack
          setTrack={setTrack}
          setPhone={setPhone}
          setPassword={setPassword}
          trackOrd={trackOrd}
        />
      ) : null}

      {data
        ? data.map((item) => {
            return (
              <div className="container shadow-lg col-lg-6 col-12 mt-5 rounded">
                <div className="d-flex justify-content-between align-items-center flex-row flex-wrap p-4 bg-secondary text-white rounded mt-2 shadow-lg ">
                <div>
                    <img
                      src={item.product_image}
                      alt=""
                      width="150"
                      height="150"
                      className="rounded border border-2 border-dark "
                    />
                  </div>
                  <div>
                    <h4 className="text-warning fw-bold text-center">
                      Personal info
                    </h4>
                    <p>Name : {item.name}</p>
                    <p>Phone No : {item.phone}</p>
                    <p>Address : {item.address}</p>
                  </div>
                  <div className="">
                    <h4 className="text-warning fw-bold text-center">
                      {item.product_name}
                    </h4>
                    <p>Sides : {item.sides}</p>
                    <p>Quantity : {item.quantity}</p>
                    <p>Price : {item.price}/-</p>
                  </div>
                 
                </div>

                <div className="d-flex justify-content-center flex-column w-100 mt-4">
                  <div>
                    <p className="pb-2">
                      <i
                        className="fa fa-check-square text-success me-2"
                        aria-hidden="true"
                      ></i>
                      Ordered Successful
                    </p>
                  </div>
                  <div>
                    <p className="pb-2">
                      <i
                        className={
                          item.approved
                            ? "fa fa-check-square text-success me-2"
                            : "fa fa-circle me-2"
                        }
                        aria-hidden="true"
                      ></i>
                      Approved , {item.date}
                    </p>
                  </div>
                  <div>
                    <p>
                      <i
                        className={
                          item.delivered
                            ? "fa fa-check-square text-success me-2"
                            : "fa fa-circle me-2"
                        }
                        aria-hidden="true"
                      ></i>
                      Delivered
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}
