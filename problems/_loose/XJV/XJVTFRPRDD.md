---
tag: XJVTFRPRDD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f : \mathbb{R}^{+} \to \mathbb{R}^{+}$ such that
$$
f(xf(x + y)) = y f(x) + 1
$$
holds for all $x, y \in \mathbb{R}^{+}$.
