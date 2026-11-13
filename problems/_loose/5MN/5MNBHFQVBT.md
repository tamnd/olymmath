---
tag: 5MNBHFQVBT
kind: problem
type: answer
answer: (\frac{3}{2},\frac{\sqrt{2}}{3})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102605
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$:
$$
1,1,2,1,2,3, \cdots, 1,2, \cdots, n, \cdots
$$

Let $S_{n}$ be the sum of the first $n$ terms of the sequence $\left\{a_{n}\right\}$. Find all pairs of positive real numbers $(\alpha, \beta)$ such that
$$
\lim _{n \rightarrow+\infty} \frac{S_{n}}{n^{\alpha}}=\beta .
$$
