---
tag: HS4TZ4B5CC
kind: problem
type: answer
answer: (1,p);(2,2);(3,3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81788
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of integers $(n, p)$ with $p$ prime, $0<n \leq 2 p$ and:

$$
n^{p-1} \mid (p-1)^{n} + 1
$$
