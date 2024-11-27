import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    
    const incrementCounter = () => {
        setCounter(counter + 1);
        
    };

    const twoCounter = () => {
        setCounter(counter + 2);
    };

    const refreshCounter = () => {
        setCounter(0);
    };

    return (
        <div className="space-x-10"> {/* Aplica espacio vertical uniforme entre elementos */}
   
   <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-pink-700 md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-sky-400">Counter:</span> {counter}</h1>
  <button
    className="bg-pink-400 hover:bg-pink text-white font-bold py-2 px-4 rounded"
    onClick={incrementCounter}
  >
    Aumentando de 1 en 1
  </button>
  <button
    className="bg-pink-500 hover:bg-pink text-white font-bold py-2 px-4 rounded"
    onClick={twoCounter}
  >
    Aumentando de 2 en 2
  </button>
  <button
    className="bg-pink-600 hover:bg-pink text-white font-bold py-2 px-4 rounded"
    onClick={refreshCounter}
  >
    Iniciando en 0
  </button>
    </div>


    );
};

export default Counter;
