---
tag: 15RE25VJXD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94244
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S=\left\{0,1, \cdots, N^{2}-1\right\}, A$ be an $N$-element subset of $S$. Prove: there exists an $N$-element subset $B$ of $S$, such that the set
$$
A+B=\{a+b \mid a \in A, b \in B\}
$$

contains at least half the number of elements of $S$ when considered modulo $N^{2}$.
