---
tag: 7J1J32ZVSQ
kind: problem
type: answer
answer: "1048577"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=144885
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $u_{0}=10+\frac{1}{10}$. We define $u_{1}=u_{0}^{2}-2, u_{2}=u_{1}^{2}-2$, and more generally $u_{k+1}=u_{k}^{2}-2$ for any natural number $k$. Let $a$ be the integer closest to $u_{20}$. Determine the number of digits in the decimal representation of $a$.
