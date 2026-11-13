---
tag: VECV4RF98H
kind: problem
type: answer
answer: A^{2}=O_{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178915
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the matrices $A, B \in M_{n}(R)$ with the property that $B-A=I_{n}$. What condition must the matrix $\mathrm{A}$ satisfy so that, for any $k \in N^{*}$, the following equality holds:

$$
B+B^{2}+\ldots+B^{k}=k I_{n}+\frac{k(k+1)}{2} \cdot A ?
$$
