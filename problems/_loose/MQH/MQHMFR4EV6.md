---
tag: MQHMFR4EV6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(E, \leqslant)$ be an ordered set. Show that there exists a finite set $F$ and sets $X_{e} \subset F$ for all $e \in E$ such that for all $e_{1}, e_{2} \in E, e_{1} \leqslant e_{2}$ if and only if $X_{e_{2}} \subset X_{e_{2}}$. (every order relation can be embodied in inclusion)

The graph of an order relation is a directed graph with vertices $E$ and such that for all distinct $x$ and $y$ in $E$, $(x, y)$ is an edge if and only if $x \leqslant y$. This graph is acyclic. Conversely, any acyclic directed graph $G=(S, A)$ defines an order on $S$ by: $u \leqslant v$ if and only if there exists a path from $u$ to $v$ in $G$. The graph $\bar{G}$ associated with $\leqslant$ defined by $(u, v)$ is an edge of $\bar{G}$ if and only if there exists a path from $u$ to $v$ in $G$ is the transitive closure of $G$.

For $G$ a graph, an orientation of $G$ is a directed graph $\vec{G}$ with the same vertices as $G$ such that $\{u, v\}$ is an edge of $G$ if and only if $(u, v)$ or (exclusive) $(v, u)$ is an edge of $\vec{G}$.
