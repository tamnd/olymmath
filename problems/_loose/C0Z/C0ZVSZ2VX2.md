---
tag: C0ZVSZ2VX2
kind: problem
type: answer
answer: (2^{n+1} - 1)/3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=73
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irish Mathematical Olympiad
---
A row of $n$ lamps is labelled from left to right with the numbers $1$ to $n$, where $n$ is an *odd* positive integer. Each lamp has a switch which, if pressed, turns it from OFF to ON or from ON to OFF; however the switches may only be pressed according to the following rules:
(a) Switch 1 may be pressed at any time;
(b) Switch $k \in \{2, \dots, n\}$ may be pressed if and only if lamp $(k-1)$ is ON and all lamps $l < (k-1)$ (if any) are OFF.
Initially all lamps are ON. Prove that the minimum number of times the switches must be pressed to turn all the lamps OFF is
$$
\frac{2^{n+1} - 1}{3}
$$
