---
tag: 7HYA9YE0BR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h502892
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8375
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2012
    source: hf-ai-mo-aops
    label: 2012 NIMO Problems
---
A *normal magic square* of order $n$ is an arrangement of the integers from $1$ to $n^2$ in a square such that the $n$ numbers in each row, each column, and each of the two diagonals sum to a constant, called the *magic sum* of the magic square. Compute the magic sum of a normal magic square of order $8$ .
