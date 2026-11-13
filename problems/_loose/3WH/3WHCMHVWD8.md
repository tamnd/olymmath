---
tag: 3WHCMHVWD8
kind: problem
type: answer
answer: n = 1011
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253646
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $1 \leq n \leq 2021$ be a positive integer. Jack has $2021$ coins arranged in a line where each coin has an $H$ on one side and a $T$ on the other. At the beginning, all coins show $H$ except the nth coin. Jack can repeatedly perform the following operation: he chooses a coin showing $T$, and turns over the coins next to it to the left and to the right (if any). Determine all $n$ such that Jack can make all coins show $T$ after a finite number of operations.
