---
tag: 1TB2CGXV1C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0000.parquet#row=404
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way
    source: hf-mathnet
    label: Baltic Way BALTIC WAY
---
A function $f$ is defined on the set of positive integers $N$ and takes positive integers as its values. It is known that for all $n \ge 3$
$$
f(n) = \lceil \sqrt{f(n-1)f(n-2)} + n \rceil
$$
Prove that there is an integer $n$ such that $f(n) = n$.
