class Customer {
    constructor({ id, firstName, lastName, email, phone }) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.phone = phone;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    async save() {
      // save method
    }
  }