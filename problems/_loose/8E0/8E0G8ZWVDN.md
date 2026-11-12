---
tag: 8E0G8ZWVDN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3071455
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21326
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2022
    source: hf-ai-mo-aops
    label: 2022 Balkan MO Shortlist
---
There are 100 positive integers written on a board. At each step, Alex composes 50 fractions using each number written on the board exactly once, brings these fractions to their irreducible form, and then replaces the 100 numbers on the board with the new numerators and denominators to create 100 new numbers.

Find the smallest positive integer $n{}$ such that regardless of the values of the initial 100 numbers, after $n{}$ steps Alex can arrange to have on the board only pairwise coprime numbers.
