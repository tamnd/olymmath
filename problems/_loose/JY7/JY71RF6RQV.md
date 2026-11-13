---
tag: JY71RF6RQV
kind: problem
type: answer
answer: P(x) = 0, P(x) = 2/3, P(x) = x, P(x) = x^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=238
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl
    source: hf-mathnet
    label: Balkan Mathematical Olympiad Balkan Mathematical Olympiad Shortlisted Problems
---
Determine all real polynomials $P(x)$ such that
$$
P^2(x) + P^2(y) + P^2(x + y) = 2P(x^2 + xy + y^2)
$$
for every $x, y \in \mathbb{R}$.
