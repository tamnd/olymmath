---
tag: N2F5AWNR1V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ be a positive integer greater than 1, and three non-zero real coefficient polynomials $f_{j}(x)=a_{j} x+b_{j}, j=1,2,3$ satisfy $f_{1}(x)^{m}+f_{2}(x)^{m}=f_{3}(x)^{m}$.

Prove: There exist constants $c_{j}(j=1,2,3)$ and a polynomial $q(x) \in \mathbf{R}[x]$, such that $f_{j}(x)=c_{j} q(x), j=1,2,3$.
