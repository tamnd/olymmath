---
tag: NQA7RPSY6Z
kind: problem
type: answer
answer: "-2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265649
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Compute the value of the sum
$$
\sum_{k = 1}^{11} \frac{\sin(2^{k + 4} \pi / 89)}{\sin(2^k \pi / 89)} .
$$
