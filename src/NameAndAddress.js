import React from 'react';
import useNameForm from './NameForm/useNameForm';
import useAddressForm from './AddressForm/useAddressForm';

const NameAndAddress = () => {
  const [nameFormState, nameFormUI] = useNameForm();
  const [addressFormState, addressFormUI] = useAddressForm();
  const onSave = (e) => {
    e.preventDefault();
    alert(`Saving name as ${nameFormState.firstName.value} ${nameFormState.middleInitial.value} ${nameFormState.lastName.value}.`);
    alert(`Saving address:
    ${addressFormState.street.value}
    ${addressFormState.city.value}, ${addressFormState.usState.value} ${addressFormState.zip.value}`);
  };
  return (
    <form onSubmit={onSave}>
      <fieldset>
        <legend>Name</legend>
        {nameFormUI}
      </fieldset>
      <fieldset>
        <legend>Address</legend>
        {addressFormUI}
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameAndAddress;
