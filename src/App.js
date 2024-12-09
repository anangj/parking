import React, { useState } from 'react';
import ParkingMap from './components/ParkingMap';
import BookingForm from './components/BookingForm';
import BookingDetails from './components/BookingDetails';
import './styles/App.css';

const App = () => {
  const [spots, setSpots] = useState([
    { id: 1, available: true },
    { id: 2, available: true },
    { id: 3, available: false },
    { id: 4, available: true },
    { id: 5, available: true },
    { id: 6, available: false },
    { id: 7, available: true },
    { id: 8, available: false },
    { id: 9, available: true },
    { id: 10, available: true },
    { id: 11, available: false },
    { id: 12, available: true },
  ]);
  

  const [selectedSpot, setSelectedSpot] = useState(null);
  const [bookingDetails, setBookingDetails] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelectSpot = (spot) => {
    if (spot.available) {
      setSelectedSpot(spot);
    } else {
      alert('This spot is already booked!');
    }
  };

  const handleBookingSuccess = (bookingData) => {
    setBookingDetails([...bookingDetails, bookingData]);
    setSpots(
      spots.map((spot) =>
        spot.id === bookingData.spotId ? { ...spot, available: false } : spot
      )
    );
    setSelectedSpot(null);
    setConfirmationMessage(`Spot #${bookingData.spotId} successfully booked!`);
    setTimeout(() => setConfirmationMessage(''), 3000);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter spots based on the search query
  const filteredSpots = spots.filter(
    (spot) =>
      spot.id.toString().includes(searchQuery) 
  );

  return (
    <div className="container">
      <h1>Parking Management System</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by Spot ID"
          value={searchQuery}
          onChange={handleSearch}
          style={{
            padding: '10px',
            width: '80%',
            maxWidth: '300px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      </div>
      
      <div className="parking-map">
        <ParkingMap spots={filteredSpots} onSelectSpot={handleSelectSpot} />
      </div>

      {selectedSpot && (
        <BookingForm selectedSpot={selectedSpot} onBookingSuccess={handleBookingSuccess} />
      )}

      {confirmationMessage && (
        <div style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>
          {confirmationMessage}
        </div>
      )}
      
      {bookingDetails.length > 0 && (
        <BookingDetails details={bookingDetails} />
      )}
    </div>
  );
};

export default App;
