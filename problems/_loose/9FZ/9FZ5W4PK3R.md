---
tag: 9FZ5W4PK3R
kind: problem
type: answer
answer: n\in{2020,2021}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88690
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all numbers $n$ for which

$$
\binom{2022}{n+1}-\binom{2021}{n} \leqslant \frac{1}{2023}\binom{2023}{n+2}
$$
