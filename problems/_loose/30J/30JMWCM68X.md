---
tag: 30JMWCM68X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80630
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G(V, E)$ be an undirected connected graph, and let $0 \leqslant a \leqslant b \leqslant c \leqslant|V|$ be three integers such that $a+b+c=|V|$. Suppose that for every $v \in V$, there exists a connected component of $G \backslash\{v\}$ of cardinality at least $a$. Show that it is possible to partition $V$ into three sets $A, B, C$ such that $|A|=a,|B|=b,|C|=c$, and that, among the restrictions $G_{A}$ of $G$ to the vertices of $A, G_{B}$ of $G$ to the vertices of $B$ and $G_{C}$ of $G$ to the vertices of $C$, there are at least two connected graphs.
