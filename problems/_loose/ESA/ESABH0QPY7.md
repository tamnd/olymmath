---
tag: ESABH0QPY7
kind: problem
type: answer
answer: 36 \text{ with } 31 \text{ balls}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $33!$ empty boxes labeled from $1$ to $33!$. In every move, we find the empty box with the smallest label, then we transfer $1$ ball from every box with a smaller label and we add an additional $1$ ball to that box. Find the smallest labeled non-empty box and the number of the balls in it after $33!$ moves.
