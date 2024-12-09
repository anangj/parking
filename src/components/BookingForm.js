import React, { useState } from 'react';

const BookingForm = ({ selectedSpot, onBookingSuccess }) => {
  const [formData, setFormData] = useState({ name: '', vehicleNumber: '', duration: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.vehicleNumber || !formData.duration) {
      alert('All fields are required!');
      return;
    }
    onBookingSuccess({ ...formData, spotId: selectedSpot.id });
  };

  return (
    <div>
      <h3>Book Spot #{selectedSpot.id}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Vehicle Number"
            value={formData.vehicleNumber}
            onChange={(e) => setFormData({ ...formData, vehicleNumber: e.target.value })}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Duration (hours)"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
