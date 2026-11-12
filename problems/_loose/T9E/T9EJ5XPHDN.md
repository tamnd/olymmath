---
tag: T9EJ5XPHDN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 ELMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3100570
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69332
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2023
    source: hf-ai-mo-aops
    label: 2023 ELMO Shortlist
---
A *discrete hexagon with center $(a,b,c)$ \emph{(where $a$, $b$, $c$ are integers)* and radius $r$ *(a nonnegative integer)*} is the set of lattice points $(x,y,z)$ such that $x+y+z=a+b+c$ and $\max(|x-a|,|y-b|,|z-c|)\le r$.

Let $n$ be a nonnegative integer and $S$ be the set of triples $(x,y,z)$ of nonnegative integers such that $x+y+z=n$. If $S$ is partitioned into discrete hexagons, show that at least $n+1$ hexagons are needed.

*Proposed by Linus Tang*
