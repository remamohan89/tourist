import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const active = paths[1];
  
  return (
    <div className="list-group">
      <Link
        to="/about"
        className={`list-group-item ${active === "about" ? "active" : ""}`}
      >
        <div className="d-flex align-items-center">
              <i className="bi bi-info-circle" aria-hidden="true"></i> 
              <span className="ps-2">About</span>
        </div> 
      </Link>

      <Link
        to="/home"
        className={`list-group-item ${(active === "home" || active ==="") ? "active" : ""}`}
      >
        <div className="d-flex align-items-center">
              <i className="bi bi-house" aria-hidden="true"></i> 
              <span className="ps-2">Home</span>
        </div> 
      </Link>

      <div className={`list-group-item ${active === "search" ? "active" : ""}`}> 
          <div className="d-flex align-items-center">
              <i className="bi bi-search" aria-hidden="true"></i> 
              <span className="ps-2">Search</span>
          </div> 
      </div>
      
      <div className={`list-group-item ${active === "profile" ? "active" : ""}`}> 
          <div className="d-flex align-items-center">
              <i className="bi bi-person" aria-hidden="true"></i> 
              <span className="ps-2">Profile</span>
          </div> 
      </div>

      
      <div className={`list-group-item ${active === "notifications" ? "active" : ""}`}> 
          <div className="d-flex align-items-center">
              <i className="bi bi-bell" aria-hidden="true"></i> 
              <span className="ps-2">Notifications</span>
          </div> 
      </div>

      <div className={`list-group-item ${active === "messages" ? "active" : ""}`}> 
          <div className="d-flex align-items-center">
              <i className="bi bi-envelope" aria-hidden="true"></i> 
              <span className="ps-2">Messages</span>
          </div> 
      </div>

      <div className={`list-group-item ${active === "lists" ? "active" : ""}`}> 
          <div className="d-flex align-items-center">
              <i className="bi bi-list-ul" aria-hidden="true"></i> 
              <span className="ps-2">Lists</span>
          </div> 
      </div>

    </div>
  );
};
export default NavigationSidebar;
