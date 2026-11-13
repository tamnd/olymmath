---
tag: E7KC7QKXVA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Silk_Road_Mathematics_Competition/train/0000.parquet#row=4
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: silk-road
    source: hf-mathnet
    label: Silk Road Mathematics Competition Silk Road Mathematics Competition
---
Let $a_1, a_2, \dots, a_{2003}$ be a sequence of real numbers. A term $a_k$, $1 \le k \le 2003$, is said to be a *leading term*, if at least one of the expressions $a_k, a_k+a_{k+1}, \dots, a_k+a_{k+1}+\dots+a_{2003}$ is positive. Prove that the sum of all leading terms is positive provided that the sequence has at least one leading term.
