---
tag: ASC612TYMN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given 2014 non-negative real numbers $a_{1}$, $a_{2}, \cdots, a_{2014}$ whose sum is 1. Prove: There exists a permutation $x_{1}, x_{2}, \cdots, x_{2014}$ of $a_{1}, a_{2}, \cdots, a_{2014}$, such that
$$
x_{1} x_{2}+x_{2} x_{3}+\cdots+x_{2013} x_{2014}+x_{2014} x_{1} \leqslant \frac{1}{2014} .
$$
