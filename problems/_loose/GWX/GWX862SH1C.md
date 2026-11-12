---
tag: GWX862SH1C
kind: problem
type: answer
answer: a_{n}=C_{n+k-1}^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=57683
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{n}$ be the number of solutions to the equation $x_{1}+\ldots+x_{k}=n$ in non-negative integers, and $F(x)$ be the generating function of the sequence $a_{n}$.

a) Prove the equalities: $F(x)=\left(1+x+x^{2}+\ldots\right)^{k}=(1-x)^{-k}$.

b) Find a formula for $a_{n}$.
