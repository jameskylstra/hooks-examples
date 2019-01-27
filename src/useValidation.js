import { useState } from 'react';

function useValidation(...validators) {
  const messages = [];
  let allValid = true;
  validators.forEach((validator) => {
    const { valid, message } = validator();
    if (!valid) {
      allValid = false;
    }
    if (message) {
      messages.push(message);
    }
  });
  return [allValid, messages];
}

export default useValidation;
