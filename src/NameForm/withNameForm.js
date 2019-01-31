import React from 'react';
import NameForm from './NameForm';

const withNameForm = (UIComponent = NameForm) =>
  Component =>
    class withNameFormInternal extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          middleInitial: '',
        };
        this.setFirstName = this.setter.bind(this, 'firstName');
        this.setLastName = this.setter.bind(this, 'lastName');
        this.setMiddleInitial = this.setter.bind(this, 'middleInitial');
      }

      setter(fieldName, value) {
        this.setState({ [fieldName]: value });
      }

      render() {
        const { firstName, lastName, middleInitial } = this.state;
        const formState = {
          firstName: { value: firstName, set: this.setFirstName },
          lastName: { value: lastName, set: this.setLastName },
          middleInitial: { value: middleInitial, set: this.setMiddleInitial },
        };
        const merged = {
          ...this.props,
          nameForm: [ formState, <UIComponent {...formState} /> ],
        };
        return <Component {...merged} />;
      }
    };

export default withNameForm;
