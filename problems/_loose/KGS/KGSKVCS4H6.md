---
tag: KGSKVCS4H6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266526
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n > 2$ be a fixed positive integer. For a set $S$ of $n$ points in the plane, let $P(S)$ be the set of perpendicular bisectors of pairs of distinct points in $S$. Call set $S$ *complete* if no two (distinct) pairs of points share the same perpendicular bisector, and every pair of lines in $P(S)$ intersects. Let $f(S)$ be the number of distinct intersection points of pairs of lines in $P(S)$.

(a) Find all complete sets $S$ such that $f(S) = 1$.
(b) Let $S$ be a complete set with $n$ points. Show that if $f(S)>1$, then $f(S) \geq n$.
