---
tag: RTV8ZFGHQ7
kind: problem
type: answer
answer: n=8p,n=60,n=100
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a natural number $n$ which is not a power of two, denote by $a(n)$ and $b(n)$ the largest and smallest odd divisors of $n$ greater than one, respectively. Determine all numbers $n$ for which

$$
3 a(n) + 5 b(n) = n
$$
