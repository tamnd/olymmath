---
tag: GMJX4KH8TE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81941
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be a set of $n$-tuples $\left(x_{1}, x_{2}, \ldots, x_{n}\right)$ where each coordinate $x_{i}$ belongs to the set $\{0,1,2\}$. Suppose that for any choice of three $n$-tuples $x, y$ and $z$ that are pairwise distinct and belong to $A$, there exists an index $i$ such that $x_{i}, y_{i}, z_{i}$ are $0,1,2$ in some order. Prove that

$$
|A| \leq 2\left(\frac{3}{2}\right)^{n}
$$
