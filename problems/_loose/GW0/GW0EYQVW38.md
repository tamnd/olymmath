---
tag: GW0EYQVW38
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, \cdots, x_{n}$ be non-negative real numbers. Denote $x_{n+1}=x_{1}, a=\min \left\{x_{1}, \cdots, x_{n}\right\}$. Prove:
$$
\sum_{j=1}^{n} \frac{1+x_{j}}{1+x_{j+1}} \leqslant n+\frac{1}{(1+a)^{2}} \sum_{j=1}^{n}\left(x_{j}-a\right)^{2}
$$

and show that equality holds if and only if $x_{1}=\cdots=x_{n}$.
