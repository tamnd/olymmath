---
tag: N2E9TNVPCZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{x_{n}\right\}$ satisfies $x_{0}>0, x_{n}=\sqrt{x_{n-1}+1}(n=1,2, \cdots)$. Prove: There must exist constants $A$ and $C(A>1, C>0)$, such that the inequality $\left|x_{n}-A\right|<\frac{C}{A^{n}}$ holds for any positive integer $n$.
