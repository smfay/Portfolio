import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './screens/Layout'
import Home from './screens/Home'

function App() {
  return (
    <>
      {/* <img src="https://smfay.github.io/portfolio/images/bg.svg" className="fixed -z-50 w-[100vmax]" /> */}
      <Layout />
    </>
  );
}

export default App;
