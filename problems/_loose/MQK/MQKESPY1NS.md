---
tag: MQKESPY1NS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89784
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M \geqslant 3$ be a natural number. We say that a regular polygon is splendidly colored if all its sides and diagonals are colored in exactly $M$ colors such that there do not exist three vertices of the polygon that determine a triangle whose sides are colored in exactly two colors.

Let $N$ be the largest natural number such that there exists a splendidly colored regular polygon with exactly $N$ vertices.

a) Prove that $N \leqslant (M-1)^{2}$.

b) If $M-1$ is a prime number, prove that there exists a splendidly colored regular polygon with exactly $(M-1)^{2}$ vertices.
