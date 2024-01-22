// CatListItem.js
import React from 'react';

function CatListItem({ randomCat, deleteCat }) {
  return (
    <div>
      <p>Random Cat ID: {randomCat.id}</p>
      <p>Random Cat URL: {randomCat.url}</p>
      <button onClick={() => deleteCat(randomCat.id)}>Delete Cat</button>
    </div>
  );
}

export default CatListItem;
