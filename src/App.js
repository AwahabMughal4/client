import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
        
      });
      
      
  }, []);

  return (
      <div>
      <h1>Data from SQL Database</h1>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>GPO_NAME</th>
            <th>post_code</th>
            <th>account_office</th>
            <th>province</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.non_delivery_post_office}</td>
              <td>{item.post_code}</td>
              <td>{item.account_office}</td>
              <td>{item.province}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default App;









