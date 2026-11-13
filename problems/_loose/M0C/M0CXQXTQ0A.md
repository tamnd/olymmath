---
tag: M0CXQXTQ0A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A polynomial $p(x)$ of degree $1000$ is such that $p(n) = (n+1)2^n$ for all nonnegative integers $n$ such that $n\leq 1000$. Given that $$p(1001) = a\cdot 2^b - c,$$ where $a$ is an odd integer, and $0 < c < 2007$, find $c-(a+b)$.
