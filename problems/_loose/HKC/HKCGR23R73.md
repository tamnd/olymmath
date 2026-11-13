---
tag: HKCGR23R73
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese Mathematical Competitions
---
Let $a > 0$ and the sequence $(x_n)$ is defined by
$$ x_1 = a, $$
$$ x_{n+1} = x_n + \frac{\sqrt{x_n}}{n^2}, \forall n \ge 1. $$
Prove that $(x_n)$ has a finite limit when $n$ tends to infinity.
