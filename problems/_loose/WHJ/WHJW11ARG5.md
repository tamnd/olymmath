---
tag: WHJW11ARG5
kind: problem
type: answer
answer: "60"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181420
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the polynomial $p(x)=\left(1+x^{3^{1}}\right)\left(1+x^{3^{2}}\right)\left(1+x^{3^{3}}\right)\left(1+x^{3^{4}}\right)\left(1+x^{3^{5}}\right)\left(1+x^{39}\right)$, and suppose we expand the product, obtaining an expression of the form $a_{0}+a_{1} x+a_{2} x^{2}+$ $\ldots+a_{402} x^{402}$, where for example $a_{0}=a_{402}=1$. How many of the coefficients $a_{0}, \ldots, a_{402}$ are non-zero?
(A) 52
(B) 56
(C) 60
(D) 64
(E) 376
