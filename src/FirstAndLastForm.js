import React from 'react';

const NameForm = ({
  firstName,
  lastName,
}) => (
  <React.Fragment>
    <label for="firstName">
      First Name:
      <input value={firstName.value} onChange={(e) => firstName.set(e.target.value)} />
    </label>
    <label for="lastName">
      Last Name:
      <input value={lastName.value} onChange={(e) => lastName.set(e.target.value)} />
    </label>
  </React.Fragment>
);

export default NameForm;
