import React from "react";

// function openNav() {
//   var x = document.getElementById("navDemo");
//   if (x.className.indexOf("w3-show") == -1) {
//     x.className += " w3-show";
//   } else {
//     x.className = x.className.replace(" w3-show", "");
//   }
// }

export default function Navbar() {
  const pic = "/SamplePic.jpg";
  return (
    <div className="w3-top">
      <div className="w3-bar w3-theme-d5 w3-left-align w3-large">
        <a
          className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2 w3-right"
          href="#"
        >
          <i className="fa fa-bars"></i>
        </a>
        <a
          href="/"
          className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
          title="My Account"
        >
          <img
            src={pic}
            className="w3-circle"
            style={{ height: "29px", width: "29px" }}
            alt="Avatar"
          />
        </a>
        <a
          href="/"
          className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white w3-right"
          title="News"
        >
          <i className="fa fa-globe"></i>
        </a>
        {/* <a href="/" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white w3-right" title="My Profile"><i className="fa fa-user"></i></a> */}
        <a
          href="/"
          className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white w3-right"
          title="Messages"
        >
          <i className="fa fa-envelope"></i>
        </a>
        <div className="w3-dropdown-hover w3-hide-small w3-right">
          <button
            className="w3-button w3-padding-large w3-right"
            title="Notifications"
          >
            <i className="fa fa-bell"></i>
            <span className="w3-badge w3-right w3-small w3-green w3-right">
              3
            </span>
          </button>
          <div
            className="w3-dropdown-content w3-card-4 w3-bar-block"
            style={{ width: "300px" }}
          >
            <a href="/" className="w3-bar-item w3-button">
              One new friend request
            </a>
            <a href="/" className="w3-bar-item w3-button">
              John Doe posted on your wall
            </a>
            <a href="/" className="w3-bar-item w3-button">
              Jane likes your post
            </a>
          </div>
        </div>
        <a
          href="#"
          className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white w3-left"
          title="Home"
        >
          <span>Home</span>
        </a>
        <a
          href="#"
          className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white w3-left"
          title="Forum"
        >
          <span>Forum</span>
        </a>

        <a
          href="#"
          className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white w3-left"
          title="LogOut"
        >
          <span>Logout</span>
        </a>
        <div style={{paddingTop:'6px'}}>
          <form className="d-flex">
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
