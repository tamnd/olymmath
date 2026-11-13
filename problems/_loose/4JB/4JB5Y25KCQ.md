---
tag: 4JB5Y25KCQ
kind: problem
type: answer
answer: "560"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145348
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of length 15 composed of the letters $A, B$, satisfies the following conditions:

For any two consecutive letters, $A A$ should appear 5 times, $A B, B A, B B$ should each appear 3 times. How many such sequences are there?

For example, in $A A B B A A A A B A A B B B B$, $A A$ appears 5 times, $A B$ appears 3 times, $B A$ appears 2 times, and $B B$ appears 4 times, which does not meet the above conditions.
