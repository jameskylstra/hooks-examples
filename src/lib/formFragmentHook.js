import React, { useState } from 'react'; 

function formFragmentHook(fieldNames, defaultComponent) {
  return function(UIComponent) {
    const Component = UIComponent || defaultComponent || React.Component;
    const formState = {};
    fieldNames.forEach((fieldName) => {
      const [value, set] = useState('');
      formState[fieldName] = { value, set };
    });
    return [formState, <Component {...formState} />];
  };
}

export default formFragmentHook;
