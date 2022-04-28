interface Form<T> {
  //[P in keyof T] will put all the keys in the type T into a string literal union.
  //This will be "name" | "email" for contactForm.
  errors: {
    //P = property or key in terms of Contact it is name and email
    [K in keyof T]?: string;
  };
  values: T;
}

interface Contact {
  name: string;
  email: string;
}

const contactForm: Form<Contact> = {
  errors: {
    email: "This must be a valid email address",
  },
  values: {
    name: "Bob",
    email: "bob@someemail.com",
  },
};
