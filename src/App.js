import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <h1>Skibid.AI</h1>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
