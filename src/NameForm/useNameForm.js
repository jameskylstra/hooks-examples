import React, { useState } from 'react';
import NameForm from './NameForm';

function useNameForm(UIComponent = NameForm) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleInitial, setMiddleInitial] = useState('');
  const formState = {
    firstName: { value: firstName, set: setFirstName },
    lastName: { value: lastName, set: setLastName },
    middleInitial: { value: middleInitial, set: setMiddleInitial },
  };
  return [formState, <UIComponent {...formState} />];
};

export default useNameForm;
