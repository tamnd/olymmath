---
tag: 4J3WGJ99ET
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220739
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let a set $S$ of $n$ points be called *cool* if:

- All points lie in a plane

- No three points are collinear

- There exists a triangle with three distinct vertices in $S$ such that the triangle contains another point in $S$ strictly inside it

Define $g(S)$ for a cool set $S$ to be the sum of the number of points strictly inside each triangle with three distinct vertices in $S$. Let $f(n)$ be the minimal possible value of $g(S)$ across all cool sets of size $n$. Find

$$ f(4) + \dots + f(2020) \pmod{1000}$$

*Proposed by Timothy Qian*
