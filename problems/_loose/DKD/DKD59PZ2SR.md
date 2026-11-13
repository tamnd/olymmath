---
tag: DKD59PZ2SR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number and a table of size $(p^2+ p+1)\times (p^2+p + 1)$ which is divided into unit cells. The way to color some cells of this table is called nice if there are no four colored cells that form a rectangle (the sides of rectangle are parallel to the sides of given table).
1. Let $k$ be the number of colored cells in some nice coloring way. Prove that $k \le (p + 1)(p^2 + p + 1)$. Denote this number as $k_{max}$.
2. Prove that all ordered tuples $(a, b, c)$ with $0 \le a, b, c < p$ and $a + b + c > 0$ can be partitioned into $p^2 + p + 1$ sets $S_1, S_2, .. . S_{p^2+p+1}$ such that two tuples $(a_1, b_1, c_1)$ and $(a_2, b_2, c_2)$ belong to the same set if and only if $a_1 \equiv ka_2, b_1 \equiv kb_2, c_1 \equiv kc_2$ (mod $p$) for some $k \in \{1,2, 3, ... , p - 1\}$.
3. For $1 \le i, j \le p^2+p+1$, if there exist $(a_1, b_1, c_1) \in S_i$ and $(a_2, b_2, c_2) \in S_j$ such that $a_1a_2 + b_1b_2 + c_1c_2 \equiv 0$ (mod $p$), we color the cell $(i, j)$ of the given table. Prove that this coloring way is nice with $k_{max}$ colored cells
