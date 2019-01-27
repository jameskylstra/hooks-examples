import React from 'react';

const ValidatedForm = ({
  required,
  xor1,
  xor2,
  valid,
  messages,
}) => (
  <React.Fragment>
    <label for="required">
      Required:
      <input id="required" value={required.value} onChange={(e) => required.set(e.target.value)}/>
    </label>
    <label for="xor1">
      xor1:
      <input id="xor1" value={xor1.value} onChange={(e) => xor1.set(e.target.value)}/>
    </label>
    <label for="xor2">
      xor2:
      <input id="xor2" value={xor2.value} onChange={(e) => xor2.set(e.target.value)}/>
    </label>
    { !valid && <h3>INVALID</h3> }
    { messages.length > 0 && 
      <ul>
        {messages.map(message => <li key={message}>{message}</li>)}
      </ul>
    }
  </React.Fragment>
);

export default ValidatedForm;
