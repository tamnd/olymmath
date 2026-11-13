---
tag: 1EVJA9KR51
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138497
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given any $n$ points $\mathrm{P}_{1}, \mathrm{P}_{2}, \ldots, \mathrm{P}_{\mathrm{n}}$ on a plane, where no three points are collinear. Each point $\mathrm{P}_{\mathrm{i}}(1 \leq i \leq n)$ is arbitrarily colored either red or blue. Let $S$ be the set of triangles with vertex set $\left\{P_{1}, P_{2}, \ldots, P_{n}\right\}$, and has the property: for any two line segments $\mathrm{P}_{\mathrm{i}} \mathrm{P}_{\mathrm{i}}$ and $\mathrm{P}_{\mathrm{u}} \mathrm{P}_{\mathrm{v}},$ the number of triangles in $S$ that have $\mathrm{P}_{\mathrm{i}} \mathrm{P}_{\mathrm{j}}$ as an edge is the same as the number of triangles in $S$ that have $\mathrm{P}_{\mathrm{u}} \mathrm{P}_{\mathrm{v}}$ as an edge. Find the smallest $n$ such that in $S$ there are always two triangles, each of which has vertices of the same color.
