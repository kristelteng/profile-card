import React from "react";
import { isMobile } from "react-device-detect";
import "./UserProfile.css";

const UserProfile = ({ user, bgColor }) => {
  return (
    <div className="user-profile" style={{ backgroundColor: bgColor }}>
      <div className="user-profile-header">
        <img
          alt={`${user.name.first} ${user.name.last} `}
          src={isMobile ? user.picture.medium : user.picture.large}
        />
        <h1 className="user-name">
          {user.name.title} {user.name.first} {user.name.last}
        </h1>
        <p className="user-email">{user.email}</p>
        <p className="user-phone">{user.phone}</p>
      </div>
      <ul className="user-profile-footer">
        <li>
          <p className="location-title">address:</p>
          <p>
            {user.location.street.number} {user.location.street.name}
          </p>
          <p>
            {user.location.city}, {user.location.state},{user.location.postcode}
          </p>
          <p>{user.location.country}</p>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;