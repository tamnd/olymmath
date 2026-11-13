---
tag: 3RGPSEHVM3
kind: problem
type: answer
answer: N = \max\{\, m,\; m + n - \tfrac{1}{2} m\big(\gcd(m,n) + 1\big) \,\}.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo
    source: hf-mathnet
    label: China China Mathematical Olympiad
---
Given positive integers $m$ and $n$. Find the smallest integer $N$ ($\ge m$) with the following property: if an $N$-element set of integers contains a complete residue system modulo $m$, then it has a nonempty subset such that the sum of its elements is divisible by $n$.
