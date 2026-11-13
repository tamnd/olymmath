---
tag: D97Q4JBHME
kind: problem
type: answer
answer: 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89630
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a room, there are $n$ boxes of heights $1,2,3, \ldots, n$ that need to be arranged in some order against a wall. Cat Fiko can jump from one box to the next if the next box is lower (regardless of how much lower) than the one he is on, or if it is at most 1 higher than the one he is currently on. In how many ways can the boxes be arranged so that Fiko can start from the first box in the row and jump sequentially to each subsequent box?
