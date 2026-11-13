---
tag: C403KEBTA8
kind: problem
type: answer
answer: (n,k)=n(,k)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123879
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[x, y]$ and $(x, y)$ denote the least common multiple and greatest common divisor of $x$ and $y$, respectively. Given positive integers $n$, $m$, and $k$ such that $n|[m, k]$ and $m|[n, k]$. Prove:
$$
n(m, k)=m(n, k) .
$$
