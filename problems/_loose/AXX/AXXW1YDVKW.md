---
tag: AXXW1YDVKW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=51
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In this problem, $G$ denotes a connected graph without parallel edges (but not necessarily a planar graph) with complement $\overline{G}$. Let $V$ be the set of vertices, $E$ be the set of edges, and $\Delta(G)$ or $\Delta_G$ be the maximum degree of the vertices. Define the chromatic number $\chi(G)$ or $\chi_G$ by
$$
\chi(G) = \chi_G = \min\{k : G \text{ has a } k\text{-colouring}\}.
$$
In other words, $\chi(G)$ is the minimum number of colours needed to colour the vertices of $G$ such that no two adjacent vertices have the same colour.

a. Show that if every vertex of $G$ has degree 2, then $V$ and $E$ form the corners and sides of a polygon. These are called *cycle graphs*.

b. Prove that $\chi_G \le \Delta_G + 1$.

c. Give two types of examples that $\chi_G = \Delta_G + 1$.

d. Show that if $G$ is not any of the above types, then $\chi_G \le \Delta_G$.

e. Give an example of $G$ such that $\chi(G) + \chi(\overline{G}) = \#V + 1$.
