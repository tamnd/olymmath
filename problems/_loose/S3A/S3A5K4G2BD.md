---
tag: S3A5K4G2BD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250619
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2015
    source: hf-mathnet
    label: Saudi Arabia SAMC 2015
---
Let $n \ge 2$ be an integer and $p_1 < p_2 < ... < p_n$ prime numbers. Prove that there exists an integer $k$ relatively prime with $p_1p_2... p_n$ and such that $gcd (k + p_1p_2...p_i, p_1p_2...p_n) = 1$ for all $i = 1, 2,..., n - 1$.

Malik Talbi
