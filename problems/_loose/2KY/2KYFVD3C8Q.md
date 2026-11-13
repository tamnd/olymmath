---
tag: 2KYFVD3C8Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Z_{\ge 0}$ be the set of all nonnegative integers. Find all the functions $f: Z_{\ge 0} \to Z_{\ge 0}$ satisfying the relation
$$
f(f(f(n))) = f(n + 1) + 1 \text{ for all } n \in Z_{\ge 0}.
$$
