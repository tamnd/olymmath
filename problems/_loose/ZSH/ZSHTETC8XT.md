---
tag: ZSHTETC8XT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245840
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}$ and $x_{2}$ be relatively prime positive integers. For $n \ge 2$, define $x_{n+1}=x_{n}x_{n-1}+1$.

- Prove that for every $i>1$, there exists $j>i$ such that ${x_{i}}^{i}$ divides ${x_{j}}^{j}$.
- Is it true that $x_{1}$ must divide ${x_{j}}^{j}$ for some $j>1$?
