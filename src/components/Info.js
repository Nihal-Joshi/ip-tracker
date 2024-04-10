import React from 'react';
import Loading from './Loading';

export default function Info(details) {
  return (
    <div className="info">
      {details
        ? (
          <div className="info__info-box">
            <div className="info-box--ip">
              <span>IP ADDRESS</span>
              {details.details.ip}
            </div>
            <div className="info-box--location">
              <span>LOCATION</span>
              {details.details.location.city}
              ,
              {' '}
              {details.details.location.region}
              {' '}
              {details.details.location.country}
              {' '}
              {details.details.location.postalCode}
            </div>
            <div className="info-box--timezone">
              <span>TIMEZONE</span>
              UTC
              {' '}
              {details.details.location.timezone}
            </div>
            <div className="info-box--isp">
              <span>ISP</span>
              {details.details.isp}
            </div>
          </div>
        )

        : <Loading />}
    </div>
  );
}
