/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Info from './Info';
import Loading from './Loading';

export default function Header(details) {
  const [ipAddress, setIpAddress] = useState(details.details.ip);

  function findIP(e) {
    e.preventDefault();
    details.trackIP(ipAddress);
  }
  return (
    <div className="header">
      <form onSubmit={(e) => findIP(e)}>
        <h1 className="heading-primary">IP Address Tracker</h1>
        <div className="header__input">
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            onChange={(e) => {
              setIpAddress(e.target.value);
            }}
          />
          <button type="submit" className="btn btn--form">
            <FaChevronRight className="icon icon--arrow-right" />
          </button>
        </div>
      </form>
      {details ? (
        <Info
          details={details.details}
        />
      )
        : <Loading />}
    </div>
  );
}
