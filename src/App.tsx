import React from 'react';
import FormCalculator from './FormCalculator';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h3>Calculator</h3>
      </header>

      <div className="app-content">
        <div className="form-wrap">
          <FormCalculator />
        </div>
      </div>
    </div>
  );
}

export default App;
