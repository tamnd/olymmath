---
tag: VEFJM2Q718
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that there exist such sequences of natural numbers $a_{n}$ and $b_{n}$ that the following conditions are simultaneously satisfied:

- sequences $a_{n}$ and $b_{n}$ are non-decreasing;
- sequences $A_{n}=\frac{1}{a_{1}}+\frac{1}{a_{2}}+\ldots+\frac{1}{a_{n}}$ and $B_{n}=\frac{1}{b_{1}}+\frac{1}{b_{2}}+\ldots+\frac{1}{b_{n}}$ increase without bound;
- sequence $C_{n}=\frac{1}{\max \left(a_{1}, b_{1}\right)}+\frac{1}{\max \left(a_{2}, b_{2}\right)}+\ldots+\frac{1}{\max \left(a_{n}, b_{n}\right)}$ is bounded.
