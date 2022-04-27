//What is the type of the invalid variable in the function below?

function outputMessage(message: string) {
  if (typeof message === "string") {
    console.log(message);
  } else {
    let invalid = message;
    console.error(invalid);
  }
}

{
  /*The code should never reach the invalid variable declaration because message is 
a string which means the logic flow should always go in the first if branch. 
So, invalid is of type never. */
}
