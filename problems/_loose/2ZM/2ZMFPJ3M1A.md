---
tag: 2ZMFPJ3M1A
kind: problem
type: answer
answer: All affine functions f(x) = m x + n for real m, n.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=8
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Romanian Mathematical Olympiad
---
Determine the continuous functions $f : \mathbb{R} \to \mathbb{R}$ having the property that, for all $x, y \in \mathbb{R}$, there exist $t \in (0, 1)$ such that
$$
f((1-t)x + ty) = (1-t)f(x) + tf(y).
$$
