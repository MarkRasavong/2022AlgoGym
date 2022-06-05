//https://www.codewars.com/kata/554e4a2f232cdd87d9000038

const DNAStrand = (dna) => (dna.replace(/[ATGC]/g, match => {
  switch (match) {
    case 'A':
      return 'T';
    case 'T':
      return 'A';
    case 'G':
      return 'C';
    case 'C':
      return 'G';
    default:
      return
  }
})
)

//CLEVER

const DNAStrand1 = (dna) => (
  dna.replace(/./g, (ltr) => DNAStrand1.pairs[ltr])
)

DNAStrand1.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}