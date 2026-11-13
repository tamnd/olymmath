---
tag: E1GD0BBJZ3
kind: problem
type: answer
answer: f(x) = { (-1 + sqrt(1 + 4x)) / 2 for x >= 0; (1 - sqrt(1 - 4x)) / 2 for x <= 0 }
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Nordic_Mathematical_Olympiad/train/0000.parquet#row=127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nordic
    source: hf-mathnet
    label: Nordic Mathematical Olympiad The 35th Nordic Mathematical Contest
---
Find all functions $f: \mathbb{R} \rightarrow \mathbb{R}$ satisfying that for every $x \in \mathbb{R}$,
$$
f(x(1+|x|)) \leq x \leq f(x)(1+|f(x)|)
$$
