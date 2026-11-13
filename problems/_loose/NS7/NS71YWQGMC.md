---
tag: NS71YWQGMC
kind: problem
type: answer
answer: \sum_{i=1}^{n}\frac{1}{a_{i}}<\frac{+n}{}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93044
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
7 Let $m, n$ be integers, $m>n \geqslant 2, S=\{1,2, \cdots, m\}, T=$ $\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}$ be a subset of $S$. It is known that any two numbers in $T$ cannot simultaneously divide any number in $S$. Prove:
$\frac{1}{a_{1}}+\frac{1}{a_{2}}+\cdots+\frac{1}{a_{n}}<\frac{m+n}{m}$.
