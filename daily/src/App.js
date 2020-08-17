import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function App() {
  const [data, setData] = useState({ nbHits: 0, hits: [] });
  let [keyword, setKeyword] = useState('js');
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${keyword}`,
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, [keyword]);

  function onKeyPressHandle(e) {
    console.log(e.target.value);
    setKeyword(e.target.value);
  }
 
  return (
 
    <div> 
      
      <input type='text' onChange={onKeyPressHandle} /> <br />

      Total Hits : 
          {data.nbHits} 

      <ul>
       {data.hits.map(item => (
         <li key={item.objectID}>
           <a href={item.url}>{item.title}</a>
         </li>
       ))}
     </ul>

    </div>
  )
      }

      export default App;