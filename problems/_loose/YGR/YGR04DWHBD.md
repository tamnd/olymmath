---
tag: YGR04DWHBD
kind: problem
type: answer
answer: P
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204583
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P$ be a cyclic polygon with circumcenter $O$ that does not lie on any diagonal, and let $S$ be the set of points on 2D plane containing $P$ and $O$.

The $\textit{Matcha Sweep Game}$ is a game between two players $A$ and $B$, with $A$ going first, such that each choosing a nonempty subset $T$ of points in $S$ that has not been previously chosen, and such that if $T$ has at least $3$ vertices then $T$ forms a convex polygon. The game ends with all points have been chosen, with the player picking the last point wins.

For which polygons $P$ can $A$ guarantee a win?

*Proposed by Anzo Teh*
