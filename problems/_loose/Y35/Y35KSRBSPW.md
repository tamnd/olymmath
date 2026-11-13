---
tag: Y35KSRBSPW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126098
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive number $a$ and a natural number $m$, let the sequence $\left\{x_{n}\right\}$ satisfy: for non-negative integers $n$,
$$
x_{n+1}=\left(1-\frac{1}{m}\right) x_{n}+\frac{a}{m x_{n}^{m-1}},
$$

where $x_{0}>0$ is arbitrarily given. Prove that: $\lim _{k \rightarrow \infty} x_{n}=\sqrt[m]{a}$.
