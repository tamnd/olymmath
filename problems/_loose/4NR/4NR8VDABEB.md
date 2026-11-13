---
tag: 4NR8VDABEB
kind: problem
type: answer
answer: 2^{1000}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123579
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$, where $a_{1}=1, a_{2}=3, a_{n+1}=3 a_{n}-2 a_{n-1}$, the value of $a$ is ( ).
A. $2^{999}$
B. $2^{999}+1$
C. $2^{1000}$
D. $2^{1000}-1$
