import { useState, useEffect } from 'react';
import './App.css';
import Row from './components/row/Row';
import API_CALL from './utils/apiCall';
import formatDate from './utils/formateDate';

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const date = formatDate();
  const url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await API_CALL(url);
      setData(data);
    };
    fetchData();
  }, [url]);
  
  return (
    <div className="app">
      <h1 className="app__header">
        Most starred repos created in the last 30 days.
      </h1>
      <ul className="repos">
        {data &&
          data.map((item) => (
            <li className="repo" key={item.id}>
              <Row item={item} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
