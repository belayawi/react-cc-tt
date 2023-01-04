import logo from './logo.svg';
import Header from './components/Header';
import './App.css';

function App() {
  const name ="Brad";
  return (
    <div className="App">
     <h1>Hello From React</h1>
     <h1>Hello {name}</h1>
     <Header />
    </div>
  );
}

export default App;
