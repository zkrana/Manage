import React from 'react';
import { FaStar } from 'react-icons/fa';

function ReviewIcon(props) {
  const rating = props.rating;

  const fullStars = Math.floor(rating);
  const halfStars = Math.round(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  const starStyle = {
    disply:'flex',
    color: 'gold',
    marginRight: '3px',
    fontSize: '1.5rem'
  };

  return (
    <div>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} style={starStyle} />
      ))}
      {[...Array(halfStars)].map((_, index) => (
        <FaStar key={`half-${index}`} style={{ ...starStyle, color: 'lightgray' }} />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <FaStar key={`empty-${index}`} style={{ ...starStyle, color: 'lightgray' }} />
      ))}
    </div>
  );
}

export default ReviewIcon;
