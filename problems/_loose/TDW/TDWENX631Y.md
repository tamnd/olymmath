---
tag: TDWENX631Y
kind: problem
type: answer
answer: pifp>1,1ifp<1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105688
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that the sequences $\left\{a_{n}\right\}$ and $\left\{b_{n}\right\}$ are both geometric sequences composed of positive numbers, with common ratios $p, q$ respectively, where $p>q$, and $p \neq 1, q \neq 1$. Let $c_{n}=a_{n}+b_{n}, S_{n}$ be the sum of the first $n$ terms of the sequence $\left\{c_{n}\right\}$, find $\lim _{n \rightarrow \infty} \frac{S_{n}}{S_{n-1}}$
