import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  const countWords = (input) => {
    return input.trim().length === 0 ? 0 : input.trim().split(/\s+/).length;
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl mt-10">
      <h2 className="text-xl font-semibold mb-4">Word Counter Tool</h2>
      <textarea
        className="w-full border rounded p-3 text-gray-700"
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
      />
      <div className="mt-4 text-gray-800 font-medium">
        Word Count: <span className="text-blue-600">{countWords(text)}</span>
      </div>
    </div>
  );
};

export default WordCounter;
