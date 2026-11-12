---
tag: 1NRPS1ZXDR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1982 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1882697
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55369
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1982
    source: hf-ai-mo-aops
    label: 1982 All Soviet Union Mathematical Olympiad
---
All the natural numbers from $1$ to $1982$ are gathered in an array in an arbitrary order in computer's memory. The program looks through all the sequent pairs (first and second, second and third,...) and exchanges numbers in the pair, if the number on the lower place is greater than another. Then the program repeats the process, but moves from another end of the array. The number, that stand initially on the $100$ -th place reserved its place. Find that number.
