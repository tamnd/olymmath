---
tag: Z3FHF6K6B8
kind: problem
type: answer
answer: (1,0,1),(1,1,1),(2,1,3),(3,2,8)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triplets of natural numbers $(a, b, k)$ such that:

$$
2^{a} 3^{b}=k(k+1)
$$
