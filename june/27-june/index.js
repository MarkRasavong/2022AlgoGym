//https://www.codewars.com/kata/5d076515e102162ac0dc514e
const babySharkLyrics = () => {
  let
    d = 'doo '.repeat(6),
    s = ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa'].map(w => `${`${w} shark, ${d}\n`.repeat(3)}${w} shark!`).join('\n'),
    h = "Let's go hunt",
    b = `${h}, ${d}\n`.repeat(3)

  return `${s}\n${b}${h}!\nRun away,…`
}

function babySharkLyrics1() {
  names = ["Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt"];
  return names.map((name) => `${name},${" doo".repeat(6)}\n`.repeat(3) + `${name}!\n`).join("") + "Run away,…";
}