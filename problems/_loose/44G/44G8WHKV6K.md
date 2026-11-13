---
tag: 44G8WHKV6K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
${ }^{+}$ To prove that Brook's theorem holds for a graph $G=(V, E)$, we can assume $\kappa(G) \geqslant 2$ and $\Delta(G) \geqslant 3$. Under these two assumptions, we will prove the theorem by first proving the following two lemmas.
(i) Let $v_{1}, \ldots, v_{n}$ be an ordering of $V$. If each vertex $v_{i} (i < n)$ is adjacent to at most $\Delta(G) - 1$ vertices among $v_{i+1}, \ldots, v_{n}$, and $v_{1} v_{n}, v_{2} v_{n} \in E$ but $v_{1} v_{2} \notin E$. Then the greedy algorithm requires at most $\Delta(G)$ colors.
(ii) If $G$ is not a complete graph and $v_{n}$ is a vertex of maximum degree in $G$, then $v_{n}$ has neighbors $v_{1}, v_{2}$ as mentioned in (i).
