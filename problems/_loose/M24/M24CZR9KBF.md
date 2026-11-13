---
tag: M24CZR9KBF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an integer $k>1$, let $f(k)$ be the number of ways to decompose $k$ into a product of positive integers greater than 1 (for example, $12=12=2 \times 6=3 \times 4=2 \times 2 \times 3$, so $f(12)=$ 4). Prove: If $n$ is an integer greater than 1, and $p$ is any prime factor of $n$, then $f(n) \leqslant \frac{n}{p}$.
