---
tag: BVYSBTC057
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177574
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b$ and $n$ be positive integers. Denote by $K(n)$ the number of the representations of 1 as a sum of $n$ numbers of the form $\frac{1}{k}$, where $k$ is a positive integer. Let $L(a, b)$ be the least positive integer $m$ such that the equation $\sum_{i=1}^{m} \frac{1}{x_{i}}=\frac{a}{b}$ has a solution in positive integers and set $L(b)=$ $\max \{L(a, b), 1 \leq a \leq b\}$. Prove that the number of the positive divisors of $b$ does not exceed $2 L(b)+K(L(b)+2)$.
