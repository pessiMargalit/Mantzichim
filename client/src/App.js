import logo from './logo.svg';
import './App.css';
import { Homepage } from './Homepage';
import { Footer } from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserModal } from './modal/UserModal';


function App() {
  return (
    <div className="App">
      

      <Router>
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/userModal" element={<UserModal/>} />
          </Routes>
      </Router>
      <Footer></Footer>

    </div>
  );
}

export default App;
