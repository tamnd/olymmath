---
tag: MFYXKMDGDF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=262
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan
    source: hf-mathnet
    label: Balkan Mathematical Olympiad 42nd Balkan Mathematical Olympiad
---
Find all polynomials $P(x)$ with integer coefficients such that there exists a positive integer $N$ such that for all positive integers $n > N$ we have $P(n) > 0$ and
$$
n + P(n) \mid n^{P(n)} + P(n)^n.
$$
