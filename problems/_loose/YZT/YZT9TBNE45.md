---
tag: YZT9TBNE45
kind: problem
type: answer
answer: n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=398
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Turbo the snail is in the lower left cell of an $n \times n$ array, $n \ge 2$, and aims to reach the upper right cell by moving one cell rightwards or one cell upwards. Some cells contain monsters, visible to Turbo, and they must be avoided. Assume there is a unique way for Turbo to achieve his goal. In terms of $n$, determine the smallest possible number of monsters such an array may contain. (The minimum is over all configurations satisfying the unique path condition.)
