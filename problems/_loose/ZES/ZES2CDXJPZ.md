---
tag: ZES2CDXJPZ
kind: problem
type: answer
answer: 1,2,3,4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The 21st question: Find all positive integers $n$ such that for any $a_{1}, a_{2}, \ldots, a_{n}, a_{i} \in (0,1] (1 \leq i \leq n)$, the inequality $\sum_{i=1}^{n} \frac{\sqrt{1-a_{i}}}{a_{i}} \leq \frac{1}{\prod_{i=1}^{n} a_{i}}$ always holds.
