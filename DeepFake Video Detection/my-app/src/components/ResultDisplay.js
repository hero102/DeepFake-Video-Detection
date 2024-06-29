import React from 'react';

const ResultDisplay = ({ result }) => {
  return (
    <div className="result-display">
      <h2>Detection Result</h2>
      <p>Output: {result.output}</p>
      <p>Confidence: {result.confidence}%</p>
    </div>
  );
};

export default ResultDisplay;
