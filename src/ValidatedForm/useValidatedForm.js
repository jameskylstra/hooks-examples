import React, { useState } from 'react';
import formFragmentHook from '../lib/formFragmentHook';
import useValidation from '../useValidation';
import ValidatedForm from './ValidatedForm';

function useValidatedForm(UIComponent = ValidatedForm) {
  const [formState, formUI] = formFragmentHook(['required', 'xor1', 'xor2'])(UIComponent); 
  const [valid, messages] = useValidation(
    () => formState.required.value !== '' ?
      { valid: true } :
      { valid: false, message: 'Required is required' },
    () => {
      if (!formState.xor1.value && !formState.xor2.value) {
        return { valid: false, message: 'You must supply either xor1 or xor2' };
      } else if (formState.xor1.value && formState.xor2.value) {
        return { valid: false, message: 'You cannot supply both xor1 and xor2' };
      }
      return { valid: true };
    },
  );
  const props = { ...formState, valid, messages };
  return [props, <UIComponent {...props} />];
}

export default useValidatedForm;
