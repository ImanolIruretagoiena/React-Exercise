//React core
import React from 'react';

//Assets and style

//Components
import Card from './Card.js';

function HomePage() {
  //Data
  const information = require('../information.json');
  const cards = information.map((item) =>
  <Card key={item.id} id={item.id} title={item.title} channelName={item.channelName}
  media={item.media} channelThumb={item.channelThumb} views={item.views}/>)
 
  //Render
  return (
    <div className="App">
      <header>
        <div className="Cards">
        {cards}
        </div>
      </header>
    </div>
  );
}

export default HomePage;