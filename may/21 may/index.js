const incrementString = (string) => {
  const strDigi = string.match(/\d+/gi)
  !strDigi && `${string}1`
  return strDigi
}