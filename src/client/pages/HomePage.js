import React from 'react';

const Home = () => {
   return (
     <div>
       <div>I'm the best component!!!</div>
      <button onClick={() => console.log('Hello! Man again ')}>Press me!</button>
     </div>
   );
};

export default {
  component: Home
}
