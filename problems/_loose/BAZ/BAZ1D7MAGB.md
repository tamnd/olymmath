---
tag: BAZ1D7MAGB
kind: problem
type: answer
answer: n + \left\lfloor \frac{6n}{7} \right\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246312
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a positive integer $n \geq 2$. Determine the maximum value of the sum of natural numbers $k_1,k_2,...,k_n$ satisfying the condition:
$k_1^3+k_2^3+ \dots +k_n^3 \leq 7n$.
