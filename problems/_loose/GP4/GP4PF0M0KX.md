---
tag: GP4PF0M0KX
kind: problem
type: answer
answer: Breaker has a winning strategy.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0000.parquet#row=397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way
    source: hf-mathnet
    label: Baltic Way BALTIC WAY
---
Two players, Maker and Breaker are playing the following game: Maker starts, and the players take turns choosing distinct numbers from the set $\{0, 1, \dots, 10\}$. Maker wins, if some of his chosen numbers form a strictly increasing arithmetic progression of length four, Breaker wins, if she manages to prevent this. Which of the players has a winning strategy?
