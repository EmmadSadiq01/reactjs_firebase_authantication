import logo from './logo.svg';
import './App.css';
import { facebookProvider } from './firebase/config'
import socialMedia from './firebase/auth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './screen/Login';
function App() {
  const handleOnClick = async (provider) => {
    let user = await socialMedia(provider)
    console.log(user)
  }
  return (
    <Router>
      <div className="App">
        {/* <button onClick={() => handleOnClick(facebookProvider)}>facebook</button> */}
        <Routes >
          <Route path='/' exact element={<Login />} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
