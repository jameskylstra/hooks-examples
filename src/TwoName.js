import React from 'react';
import useNameForm from './NameForm/useNameForm';

const TwoName = () => {
  const [myNameFormState, myNameFormUI] = useNameForm();
  const [yourNameFormState, yourNameFormUI] = useNameForm();
  const onSave = (e) => {
    e.preventDefault();
    alert(`Saving my name as ${myNameFormState.firstName.value} ${myNameFormState.middleInitial.value} ${myNameFormState.lastName.value}.`);
    alert(`Saving your name as ${yourNameFormState.firstName.value} ${yourNameFormState.middleInitial.value} ${yourNameFormState.lastName.value}.`);
  };
  return (
    <form onSubmit={onSave}>
      <fieldset>
        <legend>My Name</legend>
        {myNameFormUI}
      </fieldset>
      <fieldset>
        <legend>Your Name</legend>
        {yourNameFormUI}
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TwoName;

/**
 * Note that export default withNameForm()(withNameForm()(TwoName))
 * would not work -- the second invocation would overwrite the props
 * provided by the first invocation.
 */
