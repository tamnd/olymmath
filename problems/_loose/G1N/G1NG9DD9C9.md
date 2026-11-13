---
tag: G1NG9DD9C9
kind: problem
type: answer
answer: f(x) = 0 for all real x; f(x) = x for all real x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=8
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2011
    source: hf-mathnet
    label: Baltic Way Baltic Way 2011 Problem Shortlist
---
Let $\mathbb{R}$ denote the set of real numbers. Find all functions $f: \mathbb{R} \to \mathbb{R}$ such that
$$
x f(f(y)) + y f(y - x) = f(f(x + y) - x) f(y)
$$
for all $x, y \in \mathbb{R}$.
