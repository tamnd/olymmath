---
tag: 8SCQS770QH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261596
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $m$, let $\varphi(m)$ be the number of positive integers $k \le m$ such that $k$ and $m$ are relatively prime, and let $\sigma(m)$ be the sum of the positive divisors of $m$. Find the sum of all even positive integers $n$ such that
$$
\frac{n^5\sigma(n) - 2}{\varphi(n)}
$$
is an integer.
