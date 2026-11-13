---
tag: 1DGPW2XYY9
kind: problem
type: answer
answer: s_{k}=s_{k-4}-s_{k-3}-6s_{k-2}+5s_{k-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the terms of the sequences $u_{n}, v_{n}$ be formed from the arbitrarily chosen numbers $u_{1}, u_{2}, v_{1}, v_{2}$ according to the relations

$$
u_{n}=2 u_{n-1}+u_{n-2}, v_{n}=3 v_{n-1}-v_{n-2}
$$

Then, based on these sequences, we formed the terms of the sequence $s_{n}=u_{n}+v_{n}(n=1,2, \ldots)$. Can $s_{k}$ be determined if we know the numbers $s_{1}, s_{2}, \ldots, s_{k-1}$?
