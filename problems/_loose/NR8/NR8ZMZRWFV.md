---
tag: NR8ZMZRWFV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240837
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A network is a simple directed graph such that each edge $ e$ has two intger lower and upper capacities $ 0\leq c_l(e)\leq c_u(e)$. A circular flow on this graph is a function such that:
1) For each edge $ e$, $ c_l(e)\leq f(e)\leq c_u(e)$.
2) For each vertex $ v$: $$ \sum_{e\in v^+}f(e)=\sum_{e\in v^-}f(e)$$

a) Prove that this graph has a circular flow, if and only if for each partition $ X,Y$ of vertices of the network we have:
$$ \sum_{\begin{array}{c}{e=xy}\\{x\in X,y\in Y}\end{array}} c_l(e)\leq \sum_{\begin{array}{c}{e=yx}\\{y\in Y,x\in X}\end{array}} c_l(e)$$

b) Suppose that $ f$ is a circular flow in this network. Prove that there exists a circular flow $ g$ in this network such that $ g(e)=\lfloor f(e)\rfloor$ or $ g(e)=\lceil f(e)\rceil$ for each edge $ e$.
