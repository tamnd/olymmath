---
tag: 89TYVX1RG5
kind: problem
type: answer
answer: f(x) = 1/(1 - x) for all x in D
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2023
    source: hf-mathnet
    label: Baltic Way Baltic Way 2023 Shortlist
---
Let $D := \mathbb{R} \setminus \{0,1\}$. Find all functions $f:D \rightarrow D$ which satisfy for any $x, y \in \mathbb{R}$ with $x, xy \in D$ the equation
$$
f(f(xy)) = 1 - \frac{1}{y f(f(f(x)))}
$$
