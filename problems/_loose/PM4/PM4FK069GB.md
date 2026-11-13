---
tag: PM4FK069GB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of nonzero complex numbers $a_1, a_2, \dots, a_{2020}$ satisfies $a_3=a_2^2+2a_1a_2$ and
$$\frac{a_{n+2}}{a_{n+1}}-\frac{a_{n+1}}{a_{n}}=a_n+a_{n+1},$$
for all $2018\ge n\ge 2$. Given $a_2-a_{2020}=2025$, how many integers $0\le a_1\le 2020$ are there, such that $a_1+a_2+\cdots+a_{2019}$ is a real number?

*Proposed by winnertakeover*
