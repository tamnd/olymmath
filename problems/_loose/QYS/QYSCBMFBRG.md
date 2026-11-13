---
tag: QYSCBMFBRG
kind: problem
type: answer
answer: No, such a starting number does not exist.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=398
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the board is written a (not necessarily positive) integer. In a move, if the current number on the board is $a$, one erases it and replaces it by either $a^2 + 2a + 3$ or $5a^2 + 2$ or $a - 119$. Is there a starting number $s$ such that for any positive integer $f$ one can reach $f$ from $s$ with finitely many moves?
