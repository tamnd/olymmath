---
tag: E83MQWYTJV
kind: problem
type: answer
answer: a_{n}=\frac{3^{3^{n-1}}+1}{2^{n+1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94689
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Question 121, Given the sequence $\left\{a_{n}\right\}: a_{1}=1, a_{n+1}=2^{n} \cdot a_{n}^{2}-a_{n}+\frac{1}{2^{n+1}}$, try to find the general formula for $a_{n}$.
