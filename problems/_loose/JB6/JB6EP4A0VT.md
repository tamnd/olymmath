---
tag: JB6EP4A0VT
kind: problem
type: answer
answer: P_n = P_{n-1} + 2P_{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose there are $n$ boxes in a row and place $n$ balls in them one in each. The balls are colored red, blue or green. In how many ways can we place the balls subject to the condition that any box $B$ has at least one adjacent box having a ball of the same color as the ball in $B$? [Assume that balls in each color are available abundantly.]
