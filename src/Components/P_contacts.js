import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function P_contacts() {
  const [cont_det, setCont_det] = useState([]);
  const [approve, setApprove] = useState(true);

  // Fetch data using useEffect
  useEffect(() => {
    fetch("http://localhost:5000/cont_det")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
        return response.json();
      })
      .then((data) => {
        setCont_det(data);
      })
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJsdXUlMjB3aGl0ZXxlbnwwfHx8fDE2OTI5NzY1NTg&ixlib=rb-4.0.3&q=80&w=1080)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      <Navbar />
      <div className="container">
        <h1 className="text-center mt-5 fw-bold text-light" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0)" }}>Contact Details</h1>
        <div>
          {

            cont_det.slice().reverse().map((contact, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body bg-light text-dark border border-dark border-2">
                  <h5 className="card-title fw-bold">{contact.name}</h5>
                  <p className="card-text">Phone: {contact.phone}</p>
                  <p className="card-text">Address: {contact.address}</p>
                  <p className="card-text">Message: {contact.message}</p>
                  {contact.approve == false ? (
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => {
                        fetch("http://localhost:5000/cont_upd", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            message: contact.message, // Use the specific contact's message
                          }),
                        })
                          .then((response) => {
                            if (!response.ok) {
                              throw new Error("Failed to update approval");
                            }
                            return response.json();
                          })
                          .then((data) => {
                            // Update the state to reflect the approval
                            setCont_det((prev) =>
                              prev.map((item) =>
                                item.message === contact.message
                                  ? { ...item, approve: true }
                                  : item
                              )
                            );
                          })
                          .catch((error) =>
                            console.error("Error posting approval:", error)
                          );
                      }}
                    >
                      Approve
                    </button>
                  ) : (
                    <i
                      className="fa fa-check me-3"
                      aria-hidden="true"
                      style={{ fontSize: "20px" }}
                    >
                      Approved
                    </i>
                  )}

                  <button className="btn btn-primary">Delivered</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
