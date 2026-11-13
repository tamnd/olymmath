---
tag: E3CFJ336XB
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=153414
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f_{n+1}=\left\{\begin{array}{ll}f_{n}+3 & \text { if } n \text { is even } \\ f_{n}-2 & \text { if } n \text { is odd }\end{array}\right.$.
If $f_{1}=60$, determine the smallest possible value of $n$ satisfying $f_{m} \geq 63$ for all $m \geq n$.
