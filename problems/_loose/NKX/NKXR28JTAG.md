---
tag: NKXR28JTAG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161870
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The radical $r(n)$ of a natural number $n$ is defined as the product of all its distinct prime divisors. For example, $r(2000)=10, r(2011)=2011$. A sequence of natural numbers is defined by its first term $a_{1}$ and the relation $a_{n+1}=a_{n}+r\left(a_{n}\right)$ for $n \geqslant 1$. Prove that there will be a million consecutive terms in this sequence that form an arithmetic progression.
