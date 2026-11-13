---
tag: WARXTTK80H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $H$ be a complex Hilbert space. Let $T:H\to H$ be a bounded linear operator such that $|(Tx,x)|\le\lVert x\rVert^2$ for each $x\in H$. Assume that $\mu\in\mathbb C$, $|\mu|=1$, is an eigenvalue with the corresponding eigenspace $E=\{\phi\in H:T\phi=\mu\phi\}$. Prove that the orthogonal complement $E^\perp=\{x\in H:\forall\phi\in E:(x,\phi)=0\}$ of $E$ is $T$-invariant, i.e., $T(E^\perp)\subseteq E^\perp$.
