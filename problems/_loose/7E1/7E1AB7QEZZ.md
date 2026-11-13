---
tag: 7E1AB7QEZZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97664
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
31 Color all sides and diagonals of a convex $3 k+2$ (where $k$ is a natural number, $k \geqslant 3$) polygon red or blue, with each segment colored exactly one color. For any vertex $P$, denote the set of vertices connected to $P$ by red lines as $R(P)$. If
(1) For every vertex $P,|R(P)| \geqslant k+2$.
(2) If vertices $P, Q$ are connected by a blue line, then $|R(P) \cup R(Q)| \geqslant 2 k+2$.
Prove: There exist at least $k+2$ triangles with all three sides red.
