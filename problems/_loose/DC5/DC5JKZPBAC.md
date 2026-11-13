---
tag: DC5JKZPBAC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164971
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The first two terms of a sequence are $a_{1}=1, a_{2}=1$, and every subsequent term is the sum of the two preceding ones: $a_{k}=$ $a_{k-1}+a_{k-2}, k \geq 3$, integer.

It is to be proven that the sequence has no term which, when divided by 13, leaves a remainder of 4.
