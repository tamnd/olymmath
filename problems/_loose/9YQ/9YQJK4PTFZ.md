---
tag: 9YQJK4PTFZ
kind: problem
type: answer
answer: p^{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95355
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a prime number $p$ and a positive integer $n (p \geqslant n \geqslant 3)$, the set $A$ consists of different sequences of length $n$ with elements from the set $\{1,2, \cdots, p\}$ (not all elements in the same sequence are the same). If any two sequences $\left(x_{1}, x_{2}, \cdots, x_{n}\right)$ and $\left(y_{1}, y_{2}, \cdots, y_{n}\right)$ in set $A$ have three distinct positive integers $k, l, m$ such that $x_{k} \neq y_{k}, x_{l} \neq y_{l}, x_{m} \neq y_{m}$, find the maximum number of elements in set $A$.
