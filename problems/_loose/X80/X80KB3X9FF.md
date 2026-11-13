---
tag: X80KB3X9FF
kind: problem
type: answer
answer: (1,0,0,0),(3,0,0,1),(1,1,1,0),(2,2,1,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90788
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all nonnegative integer solutions $(a, b, c, d)$ to the equation

$$
2^{a} 3^{b}-5^{c} 7^{d}=1 \text {. }
$$
