---
tag: 5FXGWY1XBG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189717
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M$ be the set of all points in the plane with integer coordinates and $S$ be some subset of it. For the mapping $f: S \rightarrow S$, we say it is "neighborly" if $f$ is a bijection and for every $P \in S$ the points $P$ and $f(P)$ are neighbors. If there exists a "neighborly" mapping $f: S \rightarrow S$, prove that there also exists a "neighborly" mapping $g: S \rightarrow S$ that satisfies the condition $g(g(P))=P$ for every $P \in S$.
