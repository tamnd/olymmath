---
tag: P0DDJKTZ4R
kind: problem
type: answer
answer: (2n+1)π/4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=74
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatia Mathematical Competitions
---
Let $n$ be a positive integer and $a_0, a_1, \dots, a_{2n} \in \left\langle -\frac{\pi}{2}, \frac{\pi}{2} \right\rangle$ real numbers such that
$$
\tan a_k = 2^{k-n} \text{for} k = 0, 1, \dots, 2n.
$$
Determine the sum $a_0 + a_1 + \dots + a_{2n}$.
