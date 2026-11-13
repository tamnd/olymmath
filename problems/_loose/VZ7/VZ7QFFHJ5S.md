---
tag: VZ7QFFHJ5S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=78
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
There are $2^n$ soldiers standing in a line, where $n$ is a positive integer. The soldiers can rearrange themselves into a new line only in the following way: the soldiers standing at odd numbered positions move to the front of the row, keeping their positions with respect to each other, and the soldiers previously standing at even numbered positions move to the end of the row, keeping their positions with respect to each other. Prove that after $n$ rearrangements the soldiers stand in the same ordering as in the beginning.
