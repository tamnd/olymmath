---
tag: XNHKHWA3KX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ G=(V,E)$ be a simple graph.

a) Let $ A,B$ be a subsets of $ E$, and spanning subgraphs of $ G$ with edges $ A,B,A\cup B$ and $ A\cap B$ have $ a,b,c$ and $ d$ connected components respectively. Prove that $ a+b\leq c+d$.

We say that subsets $ A_1,A_2,\dots,A_m$ of $ E$ have $ (R)$ property if and only if for each $ I\subset\{1,2,\dots,m\}$ the spanning subgraph of $ G$ with edges $ \cup_{i\in I}A_i$ has at most $ n-|I|$ connected components.
b) Prove that when $ A_1,\dots,A_m,B$ have $ (R)$ property, and $ |B|\geq2$, there exists an $ x\in B$ such that $ A_1,A_2,\dots,A_m,B\backslash\{x\}$ also have property $ (R)$.

Suppose that edges of $ G$ are colored arbitrarily. A spanning subtree in $ G$ is called colorful if and only if it does not have any two edges with the same color.
c) Prove that $ G$ has a colorful subtree if and only if for each partition of $ V$ to $ k$ non-empty subsets such as $ V_1,\dots,V_k$, there are at least $ k-1$ edges with distinct colors that each of these edges has its two ends in two different $ V_i$s.
d) Assume that edges of $ K_n$ has been colored such that each color is repeated $ \left[\frac n2\right]$ times. Prove that there exists a colorful subtree.
e) Prove that in part d) if $ n\geq5$ there is a colorful subtree that is non-isomorphic to $ K_{1,n-1}$.
f) Prove that in part e) there are at least two non-intersecting colorful subtrees.
