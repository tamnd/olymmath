---
tag: DH7GAPB63B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=5
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong 1997-2023 IMO HK TST
---
Let $G$ be a simple graph with $n$ vertices and $m$ edges. Two vertices are called neighbours if there is an edge between them. It turns out that $G$ does not contain any cycle of length from $3$ to $2k$ (inclusive), where $k \ge 2$ is a given positive integer.

a. Prove that it is possible to pick a nonempty set $S$ of vertices of $G$ such that every vertex in $S$ has at least $\left\lfloor \frac{m}{n} \right\rfloor$ neighbours that are in $S$. ($\lfloor x \rfloor$ stands for the smallest integer larger than or equal to $x$.)

b. Suppose a set $S$ as described in (a) is chosen. Let $H$ be the graph consisting of the vertices in $S$ and the edges between those vertices only. Let $v$ be a vertex of $H$. Prove that at least $\left\lfloor \left( \frac{m}{n} - 1 \right)^k \right\rfloor$ vertices of $H$ can be reached by starting at $v$ and travelling along the edges of $H$ for at most $k$ steps. (Note that $v$ itself is a vertex that satisfies this condition, since it can be reached by starting at $v$ and travelling along the edges of $H$ for $0$ steps.)
