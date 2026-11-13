---
tag: FM1VYEZBPF
kind: problem
type: answer
answer: N is divisible by M
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese Mathematical Competitions
---
Let $M, N$ be two positive integers. We put a light on each unit square of the table $N \times N$ (each light is either on or off). Initially, all the lights are off. In each step, we choose either a column or a row and switch $M$ consecutive lights on the chosen column/row. Find the necessary and sufficient condition of $M, N$ such that we can switch on all the lights after finite steps.
