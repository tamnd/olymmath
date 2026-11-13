---
tag: SA1DMS7M72
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the definition of "$k$-constructible graph", replace (ii) and (iii) with the following:
(ii) Any supergraph of a $k$-constructible graph is also $k$-constructible;
(iii)' Let $x, y_{1}, y_{2}$ be distinct vertices of a graph $G$, and $y_{1} y_{2} \in E(G)$. If $G + x y_{1}$ and $G + x y_{2}$ are both $k$-constructible, then $G$ is also $k$-constructible.
Prove that under the new definition, a graph $G$ is $k$-constructible if and only if its chromatic number is at least $k$.
