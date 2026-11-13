---
tag: X17TPHM0A1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=137967
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $m$. Prove: for any positive integer $n$, there do not exist non-negative real number sequences $\left(a_{1}, a_{2}, \cdots, a_{n}\right)$ and non-zero real number sequences $\left(x_{1}, x_{2}, \cdots, x_{n}\right)$, satisfying the following conditions:
(a) $x_{n}=\max \left\{x_{1}, x_{2}, \cdots, x_{n}\right\}$;
(b) $a_{i}>m+1-\frac{x_{i+1}}{x_{i}}(i=1,2, \cdots, n-1)$;
(c) $a_{n}>m+1-\frac{1}{x_{n}} \sum_{i=1}^{n-1} x_{i}$;
(d) $\sum_{i=1}^{n} a_{i} \leqslant m+1-\frac{1}{m}$.
