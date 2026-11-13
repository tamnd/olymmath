---
tag: CGZ1E1DQFC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111405
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
12.- Let $G$ be a graph, $T$ a tree, and $\mathcal{V}=\left(V_{t}\right)_{t \in T}$ a family of subsets of $V(G)$. Prove: $(T, \mathcal{V})$ is a tree decomposition of $G$ if and only if
(i) for each vertex $v \in V(G)$, the set $T_{v}:=\left\{t \mid v \in V_{t}\right\}$ induces a subtree of $T$;
(ii) for each edge $u v$ of $G$, $T_{u} \cap T_{v} \neq \emptyset$.
