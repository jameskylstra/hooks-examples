import React from 'react';

const DogForm = ({
  name,
  age,
  breed,
  rating,
}) => (
  <React.Fragment>
    <label for="name">
      Name:
      <input id="name" value={name.value} onChange={(e) => name.set(e.target.value)} />
    </label>
    <label for="age">
      Age:
      <input id="age" value={age.value} onChange={(e) => age.set(e.target.value)} />
    </label>
    <label for="breed">
      Breed:
      <input id="breed" value={breed.value} onChange={(e) => breed.set(e.target.value)} />
    </label>
    <label for="rating">
      How good?
      <input id="rating" value={rating.value} onChange={(e) => rating.set(e.target.value)} />
    </label>
  </React.Fragment>
);

export default DogForm;
