import React from 'react';

const Page3 = ({match}) => {
  return (
    <div>
      <h1>页面三</h1>
      <h1>{match.params.username}</h1>
    </div>
  );
}

export default Page3;
