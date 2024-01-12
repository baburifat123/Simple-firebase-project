// Home.js
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Firebase/Context';
import Card from './Card';

const Home = () => {
  const firebase = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await firebase.booklists();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [firebase]);

  return (
    <div className="grid grid-cols-3 grow mt-16 gap-3 max-w-[1400px] m-auto">
      {data.map((book, index) => (
        <div key={index} className="grow">
          <Card id={book.uid} {...book} />
        </div>
      ))}
    </div>
  );
};

export default Home;
