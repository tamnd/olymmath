---
tag: B2JJNZ0GV0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $n$ is written on the board once, then $n-1$ is written on the board twice, etc.; on every step the number smaller by $1$ from the previous number is written twice as many times as the previous number. When reaching zeros this process stops. Prove that in the end the sum of the numbers on the board is less than $2^{n+1}$.
