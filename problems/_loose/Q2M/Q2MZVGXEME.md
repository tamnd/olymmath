---
tag: Q2MZVGXEME
kind: problem
type: answer
answer: "2025"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187998
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We denote the natural numbers with one of the numbers 0, 1, or 2, according to the following rule: If the number $n$ is marked with $j \in \{0,1,2\}$, then the number $n+j$ is marked with 0. Let $S$ be the sum of the numbers with which the first 2023 natural numbers are marked. Determine the maximum possible value of $S$.
