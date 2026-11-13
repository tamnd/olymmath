---
tag: 5YJ80JN0WN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider all binary sequences (sequences consisting of 0's and 1's). In such a sequence the following four types of operation are allowed: (a) $010 \rightarrow 1$, (b) $1 \rightarrow 010$, (c) $110 \rightarrow 0$, and (d) $0 \rightarrow 110$. Determine if it is possible to obtain the sequence $100...0$ (with $2003$ zeroes) from the sequence $0...01$ (with $2003$ zeroes).
