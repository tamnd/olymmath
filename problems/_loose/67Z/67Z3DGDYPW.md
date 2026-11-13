---
tag: 67Z3DGDYPW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=136
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
Find all functions $f: \mathbb{Z}^+ \to \mathbb{Z}^+$, where $\mathbb{Z}^+$ is the set of all positive integers, such that for any positive integers $m, n$, $f^{f(m)}(n) + n = f^m(n) + f(n)$.
