---
tag: 6MGJE3C0ZQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142849
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geq 7$, prove:
$$
\left[(n+1)^{2}-n^{2},(n+1)^{2}-(n-2)^{2},(n+1)^{2}-(n-4)^{2}, \ldots,(n+1)^{2}-\left(n-2\left\lfloor\frac{n}{2}\right\rfloor\right)^{2}\right]<\frac{4^{2 n+1}}{n} \cdot(2 n+2)
$$
