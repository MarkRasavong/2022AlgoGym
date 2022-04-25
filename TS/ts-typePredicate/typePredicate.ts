//unknown types allows us to reduce our use of any and create more strongly typed code.
//it requires more code but it adds extra safe guarding

//returns a promise type of unknown
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

//returns a promise of type Person or null
async function getPerson(id: string): Promise<Person | null> {
  // fetch object from api
  const person = await getData("/people/1");
  //if just person we have to make sure that  the object contains an id and name in person
  if (person && isPerson(person)) {
    return person;
  }

  //else  return nothing
  return null;
}
