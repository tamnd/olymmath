---
tag: 4ANJFMAE1V
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118473
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given 11 sets $M_{1}, M_{2}, \cdots, M_{11}$, where each set has exactly 5 elements and for all $i, j, 1 \leqslant i<j \leqslant 11$, there is $M_{i} \cap M_{j} \neq \varnothing$, find the minimum possible value of the maximum number of sets among these sets whose intersection is non-empty.
