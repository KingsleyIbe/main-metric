import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Errors from './components/Errors';
import Header from './components/Header';
import Statistics from './components/Statistics';
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
        <Errors />
        <Statistics />
      </Router>

    </div>
  );
}

export default App;
