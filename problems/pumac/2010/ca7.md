---
tag: 2JQ8EF9RGX
kind: problem
appearances:
  - at: pumac/2010/ca7
    primary: true
  - at: pumac/2010/cb8
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2010 official paper
    url: https://pumac.princeton.edu/s/PUMaC2010_CombinatoricsA.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h425829
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5457
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Matt is asked to write the numbers from 1 to 10 in order, but he forgets how to count. He writes a permutation of the numbers $\{1, 2, 3\ldots , 10\}$ across his paper such that:

- The leftmost number is 1.
- The rightmost number is 10.
- Exactly one number (not including 1 or 10) is less than both the number to its immediate left and the number to its immediate right.

How many such permutations are there?
