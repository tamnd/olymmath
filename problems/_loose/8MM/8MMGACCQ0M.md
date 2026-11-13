---
tag: 8MMGACCQ0M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154906
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of integers $a_{0}, a_{1}, \ldots$ has the property that for each $i \geq 2, a_{i}$ is either $2 a_{i-1}-a_{i-2}$ or $2 a_{i-2}-a_{i-1}$.
Given that $a_{2023}$ and $a_{2024}$ are consecutive integers, prove that $a_{0}$ and $a_{1}$ are consecutive integers.
(Note that 6 and 7 are consecutive integers, as are 7 and 6.)
