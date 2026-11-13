---
tag: AAWMDC4DJN
kind: problem
type: answer
answer: '{a, b} = {1/3, 2/3}, c = 3'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $a, b \in [0, +\infty)$, $c \in \mathbb{R}$ and $\lfloor x \rfloor + \lfloor x + a \rfloor + \lfloor x + b \rfloor = \lfloor c x \rfloor$, for every $x \in \mathbb{R}$, prove that $\{a, b\} = \{\frac{1}{3}, \frac{2}{3}\}$ and $c = 3$.
