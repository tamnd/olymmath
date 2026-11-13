---
tag: KX5FCMK6G9
kind: problem
type: answer
answer: n = p^k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all integer $n > 1$ such that
$$\gcd \left( n, \dfrac{n-m}{\gcd(n,m)} \right) = 1$$
for all integer $1 \le m < n$.
