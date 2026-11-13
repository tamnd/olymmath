---
tag: 1WGFSKMVFA
kind: problem
type: answer
answer: "197"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have three operations on integers:

- Operation $A$ which consists of multiplying by 2 and adding 4 to the result.
- Operation $B$ which consists of multiplying by 4 and adding 16 to the result.
- Operation $C$ which consists of multiplying by 5 and adding 25 to the result.

a) Determine an integer $x$ such that starting from $x$ and successively applying the operations $A, B$, and $C$ in this order, the result is 1945.

b) Determine all integers $x$ such that starting from $x$ and successively applying two different operations, the result is 2015.
