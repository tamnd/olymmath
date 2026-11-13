---
tag: P5G8HNZ2XH
kind: problem
type: answer
answer: a_{n}=2^{\frac{2^{n}-(-1)^{n}}{3}}+2^{\frac{2^{n}-(-1)^{n}}{3}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102702
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Question 126, Sequence $\left\{a_{n}\right\}_{n=0}^{+\infty}: a_{0}=2, a_{1}=\frac{5}{2}, a_{n+2}=a_{n+1}\left(a_{n}{ }^{2}-2\right)-\frac{5}{2}$. Try to find the general formula for $a_{n}$.
