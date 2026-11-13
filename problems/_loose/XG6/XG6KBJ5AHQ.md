---
tag: XG6KBJ5AHQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116879
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(2003 Taiwan Training Camp Problem) For a positive integer $n \geqslant 1$, let $f(n)=k$, where $2^{k} \mid n, 2^{k+1} \times n$. Let $x_{0}=0$, and for $n \geqslant 1$, define $x_{n}$ as follows: $\frac{1}{x_{n}}=1+2 f(n)-x_{n-1}$.
Prove: Each non-negative rational number appears exactly once in the sequence $x_{0}, x_{1}, x_{2}, \cdots$.
