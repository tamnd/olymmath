---
tag: NGWMMDWHJK
kind: problem
type: answer
answer: 'Two colorings: (1) all numbers red; (2) red numbers: 5 and 10, and all other numbers green.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania THE 68th ROMANIAN MATHEMATICAL OLYMPIAD
---
Determine all ways to color in green and red the numbers $1, 2, \ldots, 10$ such that the following conditions are fulfilled:

a) the number $5$ is colored red;

b) if the numbers $x$ and $y$ have different colors and $x + y \le 10$, then the number $x + y$ must be colored green;

c) if the numbers $x$ and $y$ have different colors and $xy \le 10$, then the number $xy$ must be colored red.
