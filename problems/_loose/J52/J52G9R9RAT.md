---
tag: J52G9R9RAT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of positive numbers $\left\{a_{n}\right\}$ satisfying: $a_{1}=a_{2}=1, a_{3}=249$, and
$$
a_{n+3}=\frac{1991+a_{n+2} a_{n+1}}{a_{n}}, n=1,2, \cdots
$$

Prove: For all $n \in N, a_{n}$ is an integer.
