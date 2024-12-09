import React from 'react';
import { Stage, Layer, Rect, Line, Text } from 'react-konva';

const ParkingMap = ({ spots, onSelectSpot }) => {
  // Parking lot dimensions
  const spotWidth = 60;
  const spotHeight = 100;
  const spotsPerRow = 5;
  const rowCount = Math.ceil(spots.length / spotsPerRow);
  const mapWidth = spotsPerRow * (spotWidth + 10) + 20;
  const mapHeight = rowCount * (spotHeight + 10) + 20;

  return (
    <div style={{ overflow: 'scroll', maxWidth: '500px', maxHeight: '300px', border: '1px solid #ccc' }}>
      <Stage
        width={mapWidth} // Dynamic map width
        height={mapHeight} // Dynamic map height
        draggable // Allow panning by dragging
        style={{
          background: '#f4f4f4',
          borderRadius: '8px',
        }}
      >
        <Layer>
          {/* Draw parking spots */}
          {spots.map((spot, index) => {
            const row = Math.floor(index / spotsPerRow); // Row number
            const col = index % spotsPerRow; // Column number
            const x = col * (spotWidth + 10) + 20; // X position
            const y = row * (spotHeight + 10) + 20; // Y position

            return (
              <React.Fragment key={spot.id}>
                {/* Parking spot rectangle */}
                <Rect
                  x={x}
                  y={y}
                  width={spotWidth}
                  height={spotHeight}
                  fill={spot.available ? '#4caf50' : '#f44336'} // Green for available, red for occupied
                  stroke="black"
                  strokeWidth={1}
                  onClick={() => onSelectSpot(spot)}
                />
                {/* Spot number */}
                <Text
                  x={x + 5}
                  y={y + 5}
                  text={`#${spot.id}`}
                  fontSize={14}
                  fill="#ffffff"
                />
              </React.Fragment>
            );
          })}

          {/* Draw parking lines */}
          {[...Array(rowCount)].map((_, rowIndex) => (
            <Line
              key={rowIndex}
              points={[
                0,
                rowIndex * (spotHeight + 10) + spotHeight + 20,
                mapWidth,
                rowIndex * (spotHeight + 10) + spotHeight + 20,
              ]}
              stroke="#cccccc"
              strokeWidth={2}
              dash={[10, 5]} // Dashed lines for parking dividers
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default ParkingMap;
