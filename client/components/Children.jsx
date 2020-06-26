import React from 'react';

const Children = ({childrenNumber}) => {
  const rows = [];

  for (let i = 1; i <= childrenNumber; i++) {
    rows.push(
      <div className='children-line' key={i}>
        <span>{`Child${i}`}</span>
        <span>splitter</span>
        <span>field</span>
        <span>drop</span>
      </div>
    );
  }

  return (
    <div>{rows}</div>
  );
};

export default Children;