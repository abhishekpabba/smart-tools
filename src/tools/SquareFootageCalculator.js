import React, { useState } from 'react';

const unitToFeet = {
  in: 1 / 12,
  ft: 1,
  yd: 3,
  mm: 1 / 304.8,
  cm: 1 / 30.48,
  m: 1 / 0.3048,
};

const shapes = ['Square', 'Rectangle', 'Circle', 'Oval', 'Triangle'];
const units = ['in', 'ft', 'yd', 'mm', 'cm', 'm'];

const SquareFootageCalculator = () => {
  const [shape, setShape] = useState('Oval');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [lengthUnit, setLengthUnit] = useState('ft');
  const [widthUnit, setWidthUnit] = useState('ft');
  const [quantity, setQuantity] = useState(1);
  const [result, setResult] = useState(null);

  const convertToFeet = (value, unit) => parseFloat(value || 0) * unitToFeet[unit];

  const calculateArea = () => {
    const l = convertToFeet(length, lengthUnit);
    const w = convertToFeet(width, widthUnit);
    let area = 0;

    switch (shape) {
      case 'Square':
      case 'Rectangle':
        area = l * w;
        break;
      case 'Circle':
        area = Math.PI * Math.pow(l / 2, 2);
        break;
      case 'Oval':
        area = Math.PI * (l / 2) * (w / 2);
        break;
      case 'Triangle':
        area = 0.5 * l * w;
        break;
      default:
        area = 0;
    }

    const total = area * quantity;

    setResult({
      sqft: total,
      sqin: total * 144,
      sqyd: total / 9,
      sqm: total * 0.092903,
      acres: total / 43560,
    });
  };

  const clearFields = () => {
    setLength('');
    setWidth('');
    setQuantity(1);
    setResult(null);
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h1 className="text-2xl font-semibold mb-6 text-center">Square Footage Calculator</h1>

      {/* Shape Selection */}
      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Area Shape</label>
        <select
          value={shape}
          onChange={(e) => setShape(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
        >
          {shapes.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Length Input */}
      <div className="mb-4 flex gap-2">
        <div className="w-full">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            {shape === 'Circle' ? 'Diameter' : 'Length'}
          </label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
            placeholder="Enter length"
          />
        </div>
        <div className="w-28">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Unit</label>
          <select
            value={lengthUnit}
            onChange={(e) => setLengthUnit(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
          >
            {units.map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Width Input (not shown for Circle) */}
      {shape !== 'Circle' && (
        <div className="mb-4 flex gap-2">
          <div className="w-full">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Width</label>
            <input
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
              placeholder="Enter width"
            />
          </div>
          <div className="w-28">
            <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Unit</label>
            <select
              value={widthUnit}
              onChange={(e) => setWidthUnit(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
            >
              {units.map((u) => (
                <option key={u}>{u}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Quantity Input */}
      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between mb-6">
        <button
          onClick={clearFields}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
        >
          Clear
        </button>
        <button
          onClick={calculateArea}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Calculate
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded text-sm">
          <p><strong>Square Footage:</strong> {result.sqft.toFixed(2)} ft²</p>
          <p><strong>Square Inches:</strong> {result.sqin.toFixed(2)} in²</p>
          <p><strong>Square Yards:</strong> {result.sqyd.toFixed(2)} yd²</p>
          <p><strong>Square Meters:</strong> {result.sqm.toFixed(2)} m²</p>
          <p><strong>Acres:</strong> {result.acres.toFixed(6)}</p>
        </div>
      )}
    </div>
  );
};

export default SquareFootageCalculator;
