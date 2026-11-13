---
tag: D9CTMB877J
kind: problem
type: answer
answer: g(n) = \frac{n^3 - n}{3} + n \lambda
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238730
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve for $g : \mathbb{Z}^+ \to \mathbb{Z}^+$ such that

$$g(m + n) = g(m) + mn(m + n) + g(n)$$

Show that $g(n)$ is of the form $\sum_{i=0}^{d} {c_i n^i}$ \\
and find necessary and sufficient conditions on $d$ and $c_0, c_1, \cdots , c_d$
