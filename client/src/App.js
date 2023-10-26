import logo from './logo.svg';
import './App.css';
import { Homepage } from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserModal } from './modal/UserModal';
import { ErrorModal } from './errorModal/ErrorModal';


function App() {
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/user-modal" element={<UserModal />} />
          <Route path="/error" element={<ErrorModal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
