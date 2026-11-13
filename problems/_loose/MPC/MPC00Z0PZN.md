---
tag: MPC00Z0PZN
kind: problem
type: answer
answer: (1,1),(3,3^{2}),(4^{2},4^{3}),(5^{5},5^{6})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(a, b)$ of natural numbers so that the following equation is satisfied:

$$
a^{6 a}=b^{b}
$$
