import React, { useEffect, useState } from 'react';
import CatListItem from './CatListItem'; 


function FancyBorder(props) {
  return <div className='fancy-border'>{props.children}</div>;
}

 function RandomCats({ fetchUrl }) {
  const [randomCats, setRandomCats] = useState([]);
  useEffect(() => {
    addCat();
  }, []);

  const getCat = () => {
    return fetch(fetchUrl).then((response) => response.json());
  };

  const addCat = () => {
    getCat().then((cat) => {
      setRandomCats((prev) => [...prev, ...cat]);
    });
  };


  function WatchCount() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return <div>You have used {count} seconds on that website</div>;
  }


  const deleteCat= (id) => {
    setRandomCats((previousState) => previousState.filter((cat) => cat.id !== id));
  };

  const randomCatsDisplay = randomCats.map((randomCat) => {

    return (
        
      <li>
      <CatListItem  key={randomCat.id}  randomCat={randomCat} deleteCat={deleteCat}/>
      <WatchCount />
        <FancyBorder>
          <img src={randomCat.url} alt="Random cat" />
        </FancyBorder>
      </li>
      
    );
  });


  

  return (
    <div className='App'>
      <h1>Random cats</h1>
      <button onClick={addCat}>Add cat</button>
      <ul>
        {randomCatsDisplay}
      </ul>
    </div>
  );
}



  
export default RandomCats;