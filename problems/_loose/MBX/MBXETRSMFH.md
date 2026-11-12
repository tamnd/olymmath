---
tag: MBXETRSMFH
kind: problem
type: answer
answer: \frac{}{q-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=43273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{a_{n}\right\}$ is defined by the recurrence relation $a_{n}=q a_{n-1}+d$, where $q \neq 1$. Prove that there exists a number $c$ such that the sequence $b_{n}=a_{n}+c$ will be a geometric progression.
