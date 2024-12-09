import React from 'react';

const BookingDetails = ({ details }) => {
  return (
    <div>
      <h2>Booking Details</h2>
      <table>
        <thead>
          <tr>
            <th>Spot ID</th>
            <th>Name</th>
            <th>Vehicle Number</th>
            <th>Duration (hours)</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{detail.spotId}</td>
              <td>{detail.name}</td>
              <td>{detail.vehicleNumber}</td>
              <td>{detail.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingDetails;
