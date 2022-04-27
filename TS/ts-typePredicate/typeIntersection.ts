interface Persona {
  firstName: string;
  level: "high" | "med" | "low";
}

type A = {
  doIt: (a: string) => void;
};
type B = {
  doIt: (a: string, b: string) => void;
};
type A_and_B = B & A;

// does this raise a type error?
const ab_v1: A_and_B = {
  doIt: (a: string) => {},
};

// does this raise a type error?
const ab_v2: A_and_B = {
  doIt: (a: string, b: string) => {},
};

// AND OTHER INTERSECTION OF COMMON MEMBERS

type BaseElement = {
  name: string;
  kind: "text" | "number" | "email";
};
type TextInput = {
  kind: "text";
};
type Field = BaseElement & TextInput;

const age: Field = {
  name: "Age",
  kind: "number",
};
