---
tag: C1BSHV2PY3
kind: problem
type: answer
answer: "506"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8004
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a square table of size $2021 \times 2021$. Each of its cells is colored in one of $n$ colors. It is known that for any four cells of the same color located in the same column, there are no cells of the same color to the right of the top one and to the left of the bottom one. What is the smallest $n$ for which this is possible?
