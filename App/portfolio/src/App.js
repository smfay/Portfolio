import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './screens/Layout'
import Home from './screens/Home'

function App() {
  return (
    <>
      <Layout className="w-screen overflow-x-hidden bg-[url('https://smfay.github.io/portfolio/images/bg.png')]" />
    </>
  );
}

export default App;
