---
tag: PCGB5TBN1A
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93919
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ points $p_{1}, p_{2}, \cdots, p_{n}$ in a plane, no three of which are collinear, each point $p_{i}(1 \leqslant i \leqslant n)$ is arbitrarily colored red or blue. Let $S$ be the set of triangles whose vertex set is $\left\{p_{1}, p_{2}, \cdots, p_{n}\right\}$, and has the property: for any two line segments $p_{i} p_{j}$ and $p_{u} p_{v}$, the number of triangles in $S$ that have $p_{i} p_{j}$ as a side is the same as the number of triangles in $S$ that have $p_{u} p_{v}$ as a side. Find the smallest $n$ such that $S$ always contains two triangles, each of whose vertices have the same color.
(48th IMO China National Training Team Test Question)
