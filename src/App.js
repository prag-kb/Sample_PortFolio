import "./App.css";
import Avatar from "@mui/material/Avatar";

function App() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="">
            {/* <div className="top">
              <img src="/" alt="" />
              <Avatar
                src=""
                className=""
                style={{ height: 180, width: 180, display: "block" }}
              />
              <p className="name" style={{ position: "relative" }}>
                name
              </p>
              <p>role</p>
            </div> */}

            <div className="side-content">
              <p className="text-content">Home</p>
              <p className="text-content">About</p>
              <p className="text-content">Service</p>
              <p className="text-content">Skills</p>
              <p className="text-content">Education</p>
              <p className="text-content">Experience</p>
              <p className="text-content">work</p>
              <p className="text-content">Blog</p>
              <p className="text-content">Contact</p>
            </div>

            <div className="footer">
              <p>&copy; Copyright 2022 All rights received</p>
            </div>
          </div>
        </div>

        <div className="body">
          <div className="">
            <p>Body</p>
            <p>Body</p>
            <p>Body</p>
            <p>Body</p>
            <p>Body</p>
            <p>Body</p>
            <p>Body</p>
            <p>Body</p>
            <p>Body</p>
            <p>Body</p>
            <p>Body</p>
            <p>Body</p>
            <p>Body</p>
            <p>Body</p>
            <p>Body</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
