/*
DNA is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms. In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Given one side of the DNA, write a function that returns the other complementary side. The DNA strand is never empty.


*/

const DNAStrand = dna => {
  const dnaMap = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  };
  return [...dna].map(ele => dnaMap[ele]).join('');
};