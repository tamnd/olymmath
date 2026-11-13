---
tag: VN5ESEA6SE
kind: problem
type: answer
answer: P(x) = x; P(x) = 0; P(x) = 1; P(x) = -1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d(n)$ be the smallest prime divisor of integer $n \notin \{0, -1, +1\}$. Determine all polynomials $P(x)$ with integer coefficients satisfying
$$
P(n+d(n)) = n+d(P(n))
$$
for all integers $n > 2014$ for which $P(n) \notin \{0, -1, +1\}$.
