import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

const TABS = [
  { label: 'Home', key: 'home' },
  { label: 'About', key: 'about' },
  { label: 'Projects', key: 'projects' },
  { label: 'Contact', key: 'contact' },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-vh-100 text-white">
      <div className="d-flex justify-content-center my-4">
        <div className="rounded-pill p-2 shadow-sm d-flex align-items-center" style={{maxWidth: 'fit-content', background: 'rgba(255,255,255,0.07)'}}>
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`btn btn-tab rounded-pill mx-2 fw-bold${activeTab === tab.key ? ' bg-info text-white' : ''}`}
              style={{minWidth: 120, fontSize: '1.2rem'}}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <main className="container">
        {renderTab()}
      </main>
    </div>
  );
}

export default App;
