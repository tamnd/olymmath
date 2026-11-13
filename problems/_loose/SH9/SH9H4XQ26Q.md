---
tag: SH9H4XQ26Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261816
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a polynomial $P$ *square-friendly* if it is monic, has integer coefficients, and there is a polynomial $Q$ for which $P(n^2)=P(n)Q(n)$ for all integers $n$. We say $P$ is *minimally square-friendly* if it is square-friendly and cannot be written as the product of nonconstant, square-friendly polynomials. Determine the number of nonconstant, minimally square-friendly polynomials of degree at most $12$.
