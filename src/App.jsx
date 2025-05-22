import React, { useState, useEffect } from 'react';
 

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="btn btn-sm btn-primary fixed top-4 right-4 z-50"
      >
        Toggle {theme === 'light' ? '🌙' : '☀️'}
      </button>
 
    </div>
  );
}

export default App;
