---
tag: JHQZ5MDQAS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For arbitrary positive integers $a, b$, denote $a @ b =\frac{a-b}{gcd(a,b)}$
Let $n$ be a positive integer. Prove that the following conditions are equivalent:
(i) $gcd(n, n @ m) = 1$ for every positive integer $m < n$,
(ii) $n = p^k$ where $p$ is a prime number and $k$ is a non-negative integer.
