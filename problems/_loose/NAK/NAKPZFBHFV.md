---
tag: NAKPZFBHFV
kind: problem
type: answer
answer: Finitely many; the greatest lighthouse number is 1260.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=297
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2019
    source: hf-mathnet
    label: Baltic Way Baltic Way 2019
---
A positive integer $N$ is called a *lighthouse number* if it has the following property. Any positive integer not exceeding $N$ which is relatively prime to it has at most two prime factors (possibly equal). Determine whether the lighthouse numbers are infinitely or finitely many and, in the latter case, find the greatest among them.
