import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './screens/Layout'
import Home from './screens/Home'
import Info from './screens/Info'
import Works from './screens/Works'
import Contact from './screens/Contact'
import Gallery from './screens/Gallery'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="info" element={<Info />} />
            <Route path="works" element={<Works />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
