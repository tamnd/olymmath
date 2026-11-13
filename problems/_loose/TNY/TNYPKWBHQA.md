---
tag: TNYPKWBHQA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Nordic_Mathematical_Olympiad/train/0000.parquet#row=1
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{R} \rightarrow \mathbb{R}$ such that
$$
f(f(x) f(y)+y)=f(x) y+f(y-x+1)
$$
for all $x, y \in \mathbb{R}$.
