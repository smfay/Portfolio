import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './screens/Layout'
import Home from './screens/Home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Portfolio" element={<Layout />} >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
