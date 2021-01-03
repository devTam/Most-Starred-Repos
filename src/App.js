import './App.css';
import Row from './components/row/Row';
import formatDate from './utils/formateDate';

function App() {
  const date = formatDate();
  

  return (
  <div className="app">
    <h1 className='app__header'>Most starred repos created in the last 30 days.</h1>
    <Row />
    <Row />
  </div>
  );
}

export default App;
