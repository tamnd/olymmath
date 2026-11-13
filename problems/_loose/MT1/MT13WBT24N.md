---
tag: MT13WBT24N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h24078
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25467
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226243
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/2004
    source: hf-ai-mo-aops
    label: 2004 IMO Shortlist
---
Let $\Gamma$ be a circle and let $d$ be a line such that $\Gamma$ and $d$ have no common points. Further, let $AB$ be a diameter of the circle $\Gamma$ ; assume that this diameter $AB$ is perpendicular to the line $d$ , and the point $B$ is nearer to the line $d$ than the point $A$ . Let $C$ be an arbitrary point on the circle $\Gamma$ , different from the points $A$ and $B$ . Let $D$ be the point of intersection of the lines $AC$ and $d$ . One of the two tangents from the point $D$ to the circle $\Gamma$ touches this circle $\Gamma$ at a point $E$ ; hereby, we assume that the points $B$ and $E$ lie in the same halfplane with respect to the line $AC$ . Denote by $F$ the point of intersection of the lines $BE$ and $d$ . Let the line $AF$ intersect the circle $\Gamma$ at a point $G$ , different from $A$ .

Prove that the reflection of the point $G$ in the line $AB$ lies on the line $CF$ .
