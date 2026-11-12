---
tag: 9ZKGCG70G1
kind: problem
type: answer
answer: f(x)=\frac{(x_{2}-x_{3})x-x_{1}(x_{2}-x_{3})}{(x_{2}-x_{1})x-x_{3}(x_{2}-x_{1})}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24724
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a triple of distinct points $x_{1}, x_{2}, x_{8}$. Find a fractional-linear function $f(x)$ such that

$$
f\left(x_{1}\right)=0, f\left(x_{2}\right)=1, f\left(x_{3}\right)=\infty
$$
