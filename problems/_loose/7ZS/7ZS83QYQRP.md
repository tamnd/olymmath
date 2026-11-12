---
tag: 7ZS83QYQRP
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12158
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Petya thought of two polynomials $f(x)$ and $g(x)$, each of the form $a x^{2} + b x + c$ (i.e., the degree of each polynomial does not exceed 2). On each turn, Vasya names a number $t$, and Petya tells him (at his discretion) one of the values $f(t)$ or $g(t)$ (without specifying which one he reported). After $n$ turns, Vasya must determine one of Petya's polynomials. For what smallest $n$ does Vasya have a strategy that guarantees he can achieve this?

(M. Antipov)
