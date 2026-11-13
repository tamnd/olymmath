---
tag: DNEAWZ1KSB
kind: problem
type: answer
answer: \frac{2}{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an integer. Determine the largest constant $C$ possible so that for all $a_{1} \ldots, a_{n} \geqslant 0$ we have $\sum a_{i}^{2} \geqslant C \sum_{i<j} a_{i} a_{j}$.
