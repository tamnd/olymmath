---
tag: SWPQKG4Y80
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94690
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose there are $2^{n}$ balls divided into several piles. We can arbitrarily select two piles, say pile A and pile B, and move balls according to the following rule: if the number of balls in pile A, $p$, is not less than the number of balls in pile B, $q$, then take $q$ balls from pile A and put them into pile B, which counts as one move. Try to prove: it is possible to merge all the balls into one pile after a finite number of moves.
