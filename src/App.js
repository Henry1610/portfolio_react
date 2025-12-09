import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
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
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '14px',
          },
          success: {
            duration: 4000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      <div className="d-flex justify-content-center my-3 my-md-4 px-2">
        <div className="rounded-pill p-1 p-md-2 shadow-sm d-flex align-items-center flex-wrap justify-content-center" 
             style={{
               maxWidth: '100%', 
               background: 'rgba(255,255,255,0.07)',
               gap: '0.25rem'
             }}>
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`btn btn-tab rounded-pill mx-1 mx-md-2 fw-bold${activeTab === tab.key ? ' bg-info text-white' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <main className="container px-2 px-md-3">
        {renderTab()}
      </main>
    </div>
  );
}

export default App;
