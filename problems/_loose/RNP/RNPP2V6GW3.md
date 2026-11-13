---
tag: RNPP2V6GW3
kind: problem
type: answer
answer: n = 2^m with m > 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=10
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice has $n^2$ sweets. These sweets are distributed among $n$ boxes ($n > 2$). Alice chooses some two of these boxes and if the total number of the sweets in these two boxes is even, then she redistributes the sweets so that the numbers of the sweets in these two boxes will be equal. Otherwise she chooses another pair of the boxes and tries to realize the same procedure.
Determine all values of $n$ for which Alice can equalize the numbers of the sweets in all boxes using this procedure regardless of the initial distribution of the sweets.
