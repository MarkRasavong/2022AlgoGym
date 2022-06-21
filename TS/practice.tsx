interface Form<T> {
  errors?:  {
    [K in keyof T]?: string;
  };

  values : T
};

interface ContactInfo {
  name: string;
  age?: number;
  email: string;
};


const marc: Form<ContactInfo> = {
  values : {
    name: 'Marc Marquez',
    email: 'marc@mm93.com'
  }
}