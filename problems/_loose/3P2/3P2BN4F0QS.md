---
tag: 3P2BN4F0QS
kind: problem
type: answer
answer: a_{1}a_{2}\cdotsa_{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120788
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $n, k$ are positive integers, $n>k$. Given real numbers $a_{1}, a_{2}, \cdots, a_{n} \in(k-1, k)$. Let positive real numbers $x_{1}, x_{2}$, $\cdots, x_{n}$ satisfy that for any $k$-element subset $I$ of $\{1,2, \cdots, n\}$, we have $\sum_{i \in I} x_{i} \leqslant \sum_{i \in I} a_{i}$. Find the maximum value of $x_{1} x_{2} \cdots x_{n}$.
