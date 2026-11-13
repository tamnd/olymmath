---
tag: A0PTDSX3ER
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125074
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 0, a_{n}=\sum_{k=0}^{n}\binom{n+k}{2 k}, b_{n}=\sum_{k=0}^{n-1}\binom{n+k}{2 k+1}$.
(1) Prove: $a_{n+1}=a_{n}+b_{n+1}, b_{n+1}=a_{n}+b_{n}$.
(2) Find the generating functions of the sequences $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$.
(3) Express $a_{n}$ and $b_{n}$ in terms of Fibonacci numbers.
