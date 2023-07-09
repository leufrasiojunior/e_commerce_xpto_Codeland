import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Retrieve data from localStorage on component mount
    const storedData = localStorage.getItem('myData');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []);

  const saveData = () => {
    // Convert data to JSON string
    const dataString = JSON.stringify(data);

    // Save data in localStorage
    localStorage.setItem('myData', dataString);
  };

  const renderData = () => {
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {renderData()}
      <button onClick={saveData}>Save Data</button>
    </div>
  );
};

export default MyComponent;
