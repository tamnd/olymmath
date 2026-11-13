---
tag: ENKQ22Y1ZE
kind: problem
type: answer
answer: (1, n) for all n > 1; (2^m − 1, 2) for all m ≥ 2; and (2, 6).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(a, n)$ of positive integers with $n > 1$ such that for every prime $p$ dividing $a^n - 1$, there exists $0 < k < n$ such that $p$ divides $a^k - 1$.
