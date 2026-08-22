// import React, { useState } from 'react';
// import * as math from 'mathjs';

// const RealCalculator = () => {
//   const [input, setInput] = useState('');
//   const [history, setHistory] = useState([]);

//   const handleButtonClick = (value) => {
//     if (input.endsWith('=')) {
//       setInput(value);
//     } else {
//       setInput((prevInput) => prevInput + value);
//       // setInput("Not")
//     }
//   };

//   const handleCalculate = () => {
//     try {
//       const result = math.evaluate(input);
//       setHistory((prevHistory) => [...prevHistory, { expression: input, result }]);
//       setInput(result.toString());
//     } catch (error) {
//       setInput('Error');
//     }
//   };

//   const handleClear = () => {
//     setInput('');
//   };

//   const handleTrigonometry = (func) => {
//     setInput((prevInput) => prevInput + `${func}(`);
//   };

//   const handleLogarithm = (base) => {
//     setInput((prevInput) => prevInput + `log${base}(`);
//   };

//   const handleExponential = () => {
//     setInput((prevInput) => prevInput + 'e^');
//   };

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   return (
//     <div className="max-w-xs mx-auto mt-10 p-4 bg-gray-200 rounded-lg text-black">
//       <input
//         type="text"
//         value={input}
//         onChange={handleInputChange}
//         readOnly
//         className="w-full py-2 px-3 mb-4 text-right border rounded focus:outline-none"
//       />
//       <div className="grid grid-cols-4 gap-2">
//         {[7, 8, 9, '/'].map((item) => (
//           <button
//             key={item}
//             onClick={() => handleButtonClick(item)}
//             className="btn"
//           >
//             {item}
//           </button>
//         ))}
//         {[4, 5, 6, '*'].map((item) => (
//           <button
//             key={item}
//             onClick={() => handleButtonClick(item)}
//             className="btn"
//           >
//             {item}
//           </button>
//         ))}
//         {[1, 2, 3, '-'].map((item) => (
//           <button
//             key={item}
//             onClick={() => handleButtonClick(item)}
//             className="btn"
//           >
//             {item}
//           </button>
//         ))}
//         {[0, '.', '=', '+'].map((item) => (
//           <button
//             key={item}
//             onClick={() => (item === '=' ? handleCalculate() : handleButtonClick(item))}
//             className={`btn ${item === '=' ? 'col-span-2' : ''}`}
//           >
//             {item}
//           </button>
//         ))}
//         {['C'].map((func) => (
//           <button
//             key={func}
//             onClick={() => handleClear()}
//             className="btn col-span-2"
//           >
//             {func}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-2 gap-2 mt-2">
//         {['sin', 'cos', 'tan', 'log', 'ln'].map((func) => (
//           <button
//             key={func}
//             onClick={() => handleTrigonometry(func)}
//             className="btn"
//           >
//             {func}
//           </button>
//         ))}
//         {['(', ')', 'e^', 'sqrt', '^'].map((func) => (
//           <button
//             key={func}
//             onClick={() => handleButtonClick(func)}
//             className="btn"
//           >
//             {func}
//           </button>
//         ))}
//         {['PI', 'log10', 'log2', 'exp', '!'].map((func) => (
//           <button
//             key={func}
//             onClick={() => handleButtonClick(func)}
//             className="btn"
//           >
//             {func}
//           </button>
//         ))}
//       </div>

//       <div className="mt-4">
//         <h2 className="text-lg font-bold mb-2">History</h2>
//         <ul>
//           {history.map((item, index) => (
//             <li key={index}>
//               <strong>{item.expression}</strong> = {item.result}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RealCalculator;
