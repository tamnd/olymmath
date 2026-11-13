---
tag: EMQPKNX539
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136322
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(53rd Romanian Mathematical Olympiad (2nd Round) Problem) Given the sequence $\left\{x_{n}\right\}$ satisfies $x_{1}=1$, and for $n \geqslant 1$, we have
$$
4\left(x_{1} x_{n}+2 x_{2} x_{n-1}+3 x_{3} x_{n-2}+\cdots+n x_{n} x_{1}\right)=(n+1)\left(x_{1} x_{2}+x_{2} x_{3}+\cdots+x_{n} x_{n+1}\right) \text {. }
$$
Find the general term formula for $\left\{x_{n}\right\}$.
