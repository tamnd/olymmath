---
tag: 6DNNT57MVM
kind: problem
type: answer
answer: ((2k choose k))^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=39
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a horizontal line, one colors $2k$ points red and, to the right of them, $2k$ points blue. On every move, one chooses two points of different color, such that there is exactly one colored point between them, and interchanges the colors of the chosen points. How many different configurations can one obtain using these moves?
