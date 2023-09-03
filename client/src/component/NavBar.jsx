import React from "react";
import { BsBell, BsChevronDown } from "react-icons/bs";

export default function NavBar() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 30px",
          fontSize: "20px",
        }}
      >
        <img src="https://kross.app/images/logo.svg" alt="logo" />
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <BsBell />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #ebecf0",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: "#e1e1e1",
                color: "white",
                padding: "5px 9px",
                borderRadius: "100%",
              }}
            >
              A
            </div>
            <p>Account Test</p>
            <BsChevronDown />
          </div>
        </div>
      </nav>
    </>
  );
}
