---
tag: ABCXPHF262
kind: problem
type: answer
answer: 1-(\frac{1}{2})^{100}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90828
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a colony consisting of 100 cells. Every minute, a cell dies with probability $\frac{1}{3}$; otherwise it splits into two identical copies. What is the probability that the colony never goes extinct?
