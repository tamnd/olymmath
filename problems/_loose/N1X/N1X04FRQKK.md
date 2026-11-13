---
tag: N1X04FRQKK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the maximal value of $c>0$ such that for any $n\ge 1$, and for any $n$ real numbers $x_1, \cdots, x_n$ there exists real numbers $a ,b$ such that $$\{x_i-a\}+\{x_{i+1}-b\}\le \frac{1}{2024}$$ for at least $cn$ indices $i$. Here, $x_{n+1}=x_1$ and $\{x\}$ denotes the fractional part of $x$.

*Proposed by Wong Jer Ren*
