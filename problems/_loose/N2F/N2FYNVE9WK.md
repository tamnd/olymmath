---
tag: N2FYNVE9WK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78479
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We take 2015 stacks of tokens, the $i$-th containing $p_{i}$ tokens, where $p_{i}$ is the $i$-th prime number (for example, the third stack contains 5 tokens). We allow:

- to split a stack into two others (not necessarily of equal size), and to add a token to one of the two stacks thus formed.
- to merge two stacks, and to add a token to the stack thus formed. Can we end up with 2015 stacks of 2015 tokens?
