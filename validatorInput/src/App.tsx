import React from 'react';
import './App.css';
import ValidateInput from './ValidateInput';

function App() {
    return (
        <div className='App'>
            <ValidateInput type='email' placeholder='Input email...' name='email' className='mt-2' />
            <ValidateInput type='phone' placeholder='Input phone...' name='phone' />
        </div>
    );
}

export default App;
