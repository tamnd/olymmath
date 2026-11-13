---
tag: 8JM3FTQBW7
kind: problem
type: answer
answer: min(n, 5)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=92
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad in Slovenia
---
A positive integer $n$ is written on the blackboard. In each step we replace the number by the sum of any two positive integers whose product is equal to the number on the board. Determine the smallest number that can be obtained after a finite number of steps in terms of the initial number $n$.
