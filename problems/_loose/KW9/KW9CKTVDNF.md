---
tag: KW9CKTVDNF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107563
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two graph invariants $i_{1}$ and $i_{2}$, if making $i_{1}(G)$ sufficiently large can force $i_{2}$ to take arbitrarily large values on some subgraph of $G$, then we write $i_{1} \leqslant i_{2}$. (Strictly speaking, if there exists a function $f: \mathbb{N} \rightarrow \mathbb{N}$ such that for any given $k \in \mathrm{N}$, every graph $G$ satisfying $i_{1}(G) \geqslant f(k)$ contains a subgraph $H$ such that $i_{2}(H) \geqslant k$, then we write $i_{1} \leqslant i_{2}$.) If both $i_{1} \leqslant i_{2}$ and $i_{1} \geqslant i_{2}$ hold, then we write $i_{1} \sim i_{2}$. Prove that this is an equivalence relation on graph invariants, and partition the following invariants into equivalence classes: minimum degree, average degree, connectivity, arboricity, chromatic number, coloring number, choice number, $\max \left\{r \mid K^{r} \subseteq G\right\}$, $\max \left\{r \mid T K^{r} \subseteq G\right\}$, $\max \left\{r \mid K^{r} \preccurlyeq G\right\}$, min $\max d^{+}(v)$, where the maximum is taken over all vertices $v$ of the graph, and the minimum is taken over all possible orientations of the graph.
