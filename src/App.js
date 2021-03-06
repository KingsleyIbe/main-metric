import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LastHour from './pages/LastHour';
import LastThreeDays from './pages/LastThreeDays';
import Today from './pages/Today';
import Yesterday from './pages/Yesterday';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Yesterday />} />
          <Route path="/lastHour" element={<LastHour />} />
          <Route path="/today" element={<Today />} />
          <Route path="/last3days" element={<LastThreeDays />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
