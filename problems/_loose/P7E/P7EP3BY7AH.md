---
tag: P7EP3BY7AH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114821
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
20.+ Let $H=H_{t}$ be a non 3-connected torso. Prove that there exists a cycle $C=v_{1} \ldots v_{k} v_{1}$ such that $V(C) \subseteq V(H)$ (but not necessarily $C \subseteq H$) such that, for all $u, v, x, y \in V(C)$, vertices $u$ and $v$ separate $x$ and $y$ in $C$ if and only if they also do so in $H$. Choose $C$ to be maximal with respect to subdivision, and prove that $H=C$. For the second part, starting from the torso of its tree decomposition, construct the graph inductively, always maintaining the connectivity of the constructed decomposition tree.
