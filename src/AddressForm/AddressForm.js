import React from 'react';

const AddressForm = ({
  street,
  city,
  usState,
  zip,
}) => (
  <React.Fragment>
    <div>
      <label for="street">
        Street:
        <input id="street" value={street.value} onChange={(e) => street.set(e.target.value)} />
      </label>
    </div>
    <div>
      <label for="city">
        City:
        <input id="city" value={city.value} onChange={(e) => city.set(e.target.value)} />
      </label>
      <label for="state">
        State:
        <input id="state" value={usState.value} onChange={(e) => usState.set(e.target.value)} />
      </label>
      <label for="zip">
        Zip:
        <input id="zip" value={zip.value} onChange={(e) => zip.set(e.target.value)} />
      </label>
    </div>
  </React.Fragment>
);

export default AddressForm;
