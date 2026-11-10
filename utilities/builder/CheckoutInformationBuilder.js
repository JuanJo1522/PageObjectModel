class CheckoutInformationBuilder {
  constructor() {
    this.information = {
      firstName: 'Martin',
      lastName: 'Garcia',
      postalCode: '53221',
    };
  }

  withFirstName(firstName) {
    this.information.firstName = firstName;
    return this;
  }

  withLastName(lastName) {
    this.information.lastName = lastName;
    return this;
  }

  withPostalCode(postalCode) {
    this.information.postalCode = postalCode;
    return this;
  }

  build() {
    const missingFields = Object.entries(this.information)
      .filter(([, value]) => !value)
      .map(([field]) => field);

    if (missingFields.length > 0) {
      throw new Error(`Missing checkout information: ${missingFields.join(', ')}`);
    }

    return { ...this.information };
  }
}

module.exports = CheckoutInformationBuilder;
