import './App.css';
import {Routes,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Login from './components/Login'
import Header from './components/Header'






function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
