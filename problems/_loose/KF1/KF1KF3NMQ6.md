---
tag: KF1KF3NMQ6
kind: problem
type: answer
answer: "2048"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109615
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let positive integers $a_{1}, a_{2}, \cdots, a_{2005}$ form a strictly increasing sequence. For all $i, j, k$ less than 2005 and distinct, $a_{i} a_{j} \neq a_{k}$, find the minimum possible value of $a_{2005}$.
