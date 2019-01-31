import React from 'react';
import AddressForm from './AddressForm';

const withAddressForm = (UIComponent = AddressForm) =>
  Component =>
    class withAddressFormInternal extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          street: '',
          city: '',
          usState: '',
          zip: '',
        };
        this.setStreet = this.setter.bind(this, 'street');
        this.setCity = this.setter.bind(this, 'city');
        this.setUsState = this.setter.bind(this, 'usState');
        this.setZip = this.setter.bind(this, 'zip');
      }

      setter(fieldName, value) {
        this.setState({ [fieldName]: value });
      }

      render() {
        const {
          street,
          city,
          usState,
          zip,
        } = this.state;
        const formState = {
          street: { value: street, set: this.setStreet },
          city: { value: city, set: this.setCity },
          usState: { value: usState, set: this.setUsState },
          zip: { value: zip, set: this.setZip },
        };
        const merged = {
          ...this.props,
          addressForm: [ formState, <UIComponent {...formState} /> ],
        };
        return <Component {...merged} />;
      }
    };

export default withAddressForm;
