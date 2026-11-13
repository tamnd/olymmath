---
tag: RKVVY7P0KJ
kind: problem
type: answer
answer: 0 \leq \Delta \leq 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234086
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a function $f(x)=x^{2}+ax+b$ with $a,b \in R$, if there exists a real number $m$ such that $\left| f(m) \right| \leq \frac{1}{4}$ and $\left| f(m+1) \right| \leq \frac{1}{4}$, then find the maximum and minimum of the value of $\Delta=a^{2}-4b$.
