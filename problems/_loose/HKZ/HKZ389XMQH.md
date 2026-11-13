---
tag: HKZ389XMQH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268749
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of integers $A_1,A_2,\cdots A_{99}$ such that for every sub-sequence that contains $m$ consecutive elements, there exist not more than $max\{ \frac{m}{3} ,1\}$ odd integers. Let $S=\{ (i,j) \ | i<j \}$ such that $A_i$ is even and $A_j$ is odd. Find $max\{ |S|\}$.
