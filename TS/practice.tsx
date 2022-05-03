interface Form<T> {
  errors: {
    [K in keyof T]?: string;
  }
  values: T
};

interface Contact {
  name: string;
  email: string;
  age: number;
}

const userContact: Form<Contact> = {
  errors: {
    name: "please enter a name",
    email: "please enter a email",
    age: "please enter a valid age"
  },
  values: {
    name: "marcus aurelius",
    email: "the_real_aurelius@gmail.com",
    age: 59
  }
}