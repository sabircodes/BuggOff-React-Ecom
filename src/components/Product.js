import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const [formattedPrice, setFormattedPrice] = useState(null);

  const fetchFormattedPrice = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const calculatedPrice = price + 800;
        resolve(calculatedPrice);
      }, 2000); // Simulating an asynchronous delay of 2 seconds
    });
  };

  useEffect(() => {
    fetchFormattedPrice()
      .then((calculatedPrice) => {
        setFormattedPrice(calculatedPrice);
      })
      .catch((error) => {
        console.error('Error occurred while fetching formatted price:', error);
      });
  }, []);

  return (
    <div className="flex flex-col w-80 mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Rest of the code remains the same */}
    </div>
  );
}

export default Product;