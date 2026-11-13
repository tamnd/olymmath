---
tag: P6S1KJB1NY
kind: problem
type: answer
answer: N = 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=269
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian Mathematical Olympiad
---
Let $N > 1$ be an integer, and let $d_1 < \dots < d_s$ be all its positive divisors (thus, $d_1 = 1$ and $d_s = N$). Find all possible values of $N$ for which
$$
\gcd(d_1, d_2) + \gcd(d_2, d_3) + \dots + \gcd(d_{s-1}, d_s) = N - 2. (\text{A. Kuznetsov})
$$
