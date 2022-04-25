async function getData(path: string): Promise<unknown> {
  const response = await fetch(path);
  return await response.json();
}

type Person = {
  id: string;
  name: string;
};

function isPerson(person: any): person is Person {
  return "id" in person && "name" in person;
}

async function getPerson(id: string): Promise<Person | null> {
  const person = await getData("/people/1");
  if (person && isPerson(person)) {
    return person;
  }
  return null;
}
