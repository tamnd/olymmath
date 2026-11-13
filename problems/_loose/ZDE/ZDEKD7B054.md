---
tag: ZDEKD7B054
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231670
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an equilateral triangle with every side divided by $n$ points into $n+1$ equal parts. We put a marker on every of the $3n$ division points. We draw lines parallel to the sides of the triangle through the division points, and this way divide the triangle into $(n+1)^2$ smaller ones.
Consider the following game: if there is a small triangle with exactly one vertex unoccupied, we put a marker on it and simultaneously take markers from the two its occupied vertices. We repeat this operation as long as it is possible.

(a) If $n\equiv1\pmod3$, show that we cannot manage that only one marker remains.
(b) If $n\equiv0$ or $n\equiv2\pmod3$, prove that we can finish the game leaving exactly one marker on the triangle.
