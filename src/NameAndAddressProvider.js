import React from 'react';
import withNameForm from './NameForm/withNameForm';
import withAddressForm from './AddressForm/withAddressForm';

const NameAndAddressProviderComponent = ({ nameForm, addressForm }) => {
  const [nameFormState, nameFormUI] = nameForm;
  const [addressFormState, addressFormUI] = addressForm;
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

export { NameAndAddressProviderComponent };
export default withNameForm()(
  withAddressForm()(NameAndAddressProviderComponent)
);

