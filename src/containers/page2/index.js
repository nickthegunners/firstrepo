import React from 'react';

function Page2(props) {
  const { match } = props;
  const number = match.params.number;
  return (
    <div className="page2">
      <h1>Page 2. ID: {number}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste officia veritatis natus molestias eaque aliquid unde ducimus quam necessitatibus. Tenetur qui accusamus ipsam repudiandae mollitia praesentium rem deserunt accusantium! Quasi dicta, delectus dolores reiciendis deleniti natus repudiandae voluptatem minima dolore.</p>
    </div>
  );
}

export default Page2;
