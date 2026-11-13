---
tag: MYWEVW0GRY
kind: problem
type: answer
answer: P(x, y) = k x y for some real constant k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Thailand/train/0000.parquet#row=66
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all polynomials $P \in \mathbb{R}[x, y]$ such that
$$
P(a, b^2 - ac) + P(b, c^2 - ab) + P(c, a^2 - bc) = 0
$$
for all $a, b, c \in \mathbb{R}$.
