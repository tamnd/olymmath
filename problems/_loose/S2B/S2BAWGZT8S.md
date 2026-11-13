---
tag: S2BAWGZT8S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81050
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Hall's Infinite Marriage Theorem - less naive extension) Let $\mathcal{G}=(A \cup B, E)$ be an infinite countable bipartite graph, where the two components $A$ and $B$ are infinite, and every vertex has finite degree. For any subset $X$ of $A$, we associate the subset $E(X)=\{b \in B: \exists a \in X,(a, b) \in E\}$ of vertices in $B$ connected to at least one vertex in $X$. Show that the following two statements are equivalent:

1. there exists a saturating matching $f: A \rightarrow B$;
2. for every finite subset $X \subseteq A, E(X)$ has cardinality $|E(X)| \geqslant|X|$.
