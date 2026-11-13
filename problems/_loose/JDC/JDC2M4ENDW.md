---
tag: JDC2M4ENDW
kind: problem
type: answer
answer: \frac{1}{24}n(n+1)(5n^{2}+5n+2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125648
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the polynomial determined by the identity
$$
a_{0}+a_{1} x+a_{2} x^{2}+\cdots+a_{2 n} x^{2 n} \equiv\left(x+2 x^{2}+\cdots+n x^{n}\right)^{2}
$$

Prove: $\sum_{k=n+1}^{2 n} \cdot a_{k}=\frac{1}{24} n(n+1)\left(5 n^{2}+5 n+2\right)$.
