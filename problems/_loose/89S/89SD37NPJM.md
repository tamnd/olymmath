---
tag: 89SD37NPJM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113014
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a graph $G$ and $k \in \mathbb{N}$, let $P_{G}(k)$ denote the number of vertex colorings $V(G) \rightarrow\{1, \ldots, k\}$. Prove: $P_{G}$ is a polynomial in $k$, its degree is $n:=|G|$, and the coefficient of $k^{n}$ is $1$, the coefficient of $k^{n-1}$ is $-\|G\|$. ($P_{G}$ is called the chromatic polynomial of $G$.)
