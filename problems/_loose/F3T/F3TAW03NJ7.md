---
tag: F3TAW03NJ7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=51
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all continuous functions $f : \mathbb{R} \to \mathbb{R}$ with the property that for every $a \in \mathbb{R}$ there exists $b \in \mathbb{R}$ such that, for every $x \in \mathbb{R}$,
$$
f(f(x) + a) = f(x) + b.
$$
