---
tag: 5T9QNGA0AG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
6 At the start of this problem, six frogs are sitting with one at each of the six vertices of a regular hexagon. Every minute, we choose a frog to jump over another frog using one of the two rules illustrated below. If a frog at point $F$ jumps over a frog at point $P$, the frog will land at point $F^{\prime}$ such that $F, P$, and $F^{\prime}$ are collinear and:
- using Rule $1, F^{\prime} P=2 F P$.
- using Rule $2, F^{\prime} P=F P / 2$.

It is up to us to choose which frog to take the leap and which frog to jump over.
(a) If we only use Rule 1, is it possible for some frog to land at the center of the original hexagon after a finite amount of time?
(b) If both Rule 1 and Rule 2 are allowed (freely choosing which rule to use, which frog to jump, and which frog it jumps over), is it possible for some frog to land at the center of the original hexagon after a finite amount of time?
