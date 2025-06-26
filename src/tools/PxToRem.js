import React, { useState } from 'react';

const PxToRem = () => {
  const [px, setPx] = useState('');
  const [base, setBase] = useState(16);

  const rem = px ? (parseFloat(px) / base).toFixed(4) : '';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${rem} rem`);
    alert('Copied to clipboard!');
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">PX to REM Converter</h1>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Pixels (px)</label>
        <input
          type="number"
          value={px}
          onChange={(e) => setPx(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
          placeholder="Enter value in px"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Base Font Size (px)</label>
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(parseFloat(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
          placeholder="Usually 16"
        />
      </div>

      <div className="mb-4 text-lg">
        <strong>REM:</strong> {rem ? `${rem} rem` : '—'}
      </div>

      <button
        onClick={copyToClipboard}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        Copy to Clipboard
      </button>
    </div>
  );
}
export default PxToRem;
