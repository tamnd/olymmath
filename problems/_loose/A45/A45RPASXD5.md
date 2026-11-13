---
tag: A45RPASXD5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236862
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let us define $f$ and $g$ by $f(x) = x^5 +5x^4 +5x^3 +5x^2 +1$, $g(x) = x^5 +5x^4 +3x^3 -5x^2 -1$.
Determine all prime numbers $p$ such that, for at least one integer $x, 0 \le x < p-1$, both $f(x)$ and $g(x)$ are divisible by $p$. For each such $p$, find all $x$ with this property.
