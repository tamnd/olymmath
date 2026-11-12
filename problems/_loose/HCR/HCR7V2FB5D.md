---
tag: HCR7V2FB5D
kind: problem
type: answer
answer: 225,256,361
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4591
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A natural number $A$ is called interesting if there exists a natural number $B$ such that:

- $A>B$;
- the difference between the numbers $A$ and $B$ is a prime number;
- the product of the numbers $A$ and $B$ is a perfect square.

Find all interesting numbers greater than 200 and less than 400.
