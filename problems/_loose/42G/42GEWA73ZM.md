---
tag: 42GEWA73ZM
kind: problem
type: answer
answer: 1+\lceiln/2\rceil\leqk\leq2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77480
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ and $n$ be two non-zero natural numbers such that $k \leqslant 2^{n}$. Morgane has written, in her notebook, the set of all $n$-tuples formed of 0 and 1: there are $2^{n}$ of them. We say that two $n$-tuples $\left(x_{1}, \ldots, x_{n}\right)$ and $\left(y_{1}, \ldots, y_{n}\right)$ are neighbors if they have $n-1$ terms in common, that is, if there is only one integer $i$ such that $x_{i} \neq y_{i}$. Then Morgane chooses $k$ of these $n$-tuples and underlines them. She then performs the following operations: in each operation, she chooses an $n$-tuple whose two neighbors are underlined, and she also underlines this $n$-tuple.

For which values of $k$ can Morgane manage to underline all the $n$-tuples?
