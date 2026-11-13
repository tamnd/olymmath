---
tag: 4ZFMXV5DT5
kind: problem
type: answer
answer: a_{1}\ldotsa_{k}(a_{1}+\cdots+a_{k})^{k-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90754
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be a simple graph with $k$ connected components, which have $a_{1}, \ldots, a_{k}$ vertices, respectively. Determine the number of ways to add $k-1$ edges to $G$ to form a connected graph, in terms of the numbers $a_{i}$.
