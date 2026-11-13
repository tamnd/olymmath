---
tag: 3CDB48EGRW
kind: problem
type: answer
answer: "538"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154824
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 2023 cups numbered from 1 through 2023. Red, green, and blue balls are placed in the cups according to the following rules.
- If cups $m$ and $n$ both contain a red ball, then $m-n$ is a multiple of 2 .
- If cups $m$ and $n$ both contain a green ball, then $m-n$ is a multiple of 3 .
- If cups $m$ and $n$ both contain a blue ball, then $m-n$ is a multiple of 5 .

What is the smallest possible number of empty cups?
