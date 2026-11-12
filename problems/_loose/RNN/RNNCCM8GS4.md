---
tag: RNNCCM8GS4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the iterated kernels $K_{1}(x, t)$ and $K_{2}(x, t)$, if $a=0$, $b=1$ n

$$
K(x, t)= \begin{cases}x+t, & \text { if } 0 \leqslant x<t \\ x-t, & \text { if } t<x \leqslant 1\end{cases}
$$
