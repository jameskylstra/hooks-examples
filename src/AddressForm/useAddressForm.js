import React, { useState } from 'react';
import AddressForm from './AddressForm';

function useNameForm(UIComponent = AddressForm) {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [usState, setUsState] = useState('');
  const [zip, setZip] = useState('');
  const formState = {
    street: { value: street, set: setStreet },
    city: { value: city, set: setCity },
    usState: { value: usState, set: setUsState },
    zip: { value: zip, set: setZip },
  };
  return [formState, <UIComponent {...formState} />];
};

export default useNameForm;
