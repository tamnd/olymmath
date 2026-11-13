---
tag: Z1VDGY3TQE
kind: problem
type: answer
answer: f(n) = c n for some positive integer c
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst
    source: hf-mathnet
    label: Romania 67th NMO Selection Tests for BMO and IMO
---
Determine all functions $f$ of the set of positive integers into itself such that $f(m) \ge m$ and $f(m+n)$ divides $f(m) + f(n)$ for all positive integers $m$ and $n$.
