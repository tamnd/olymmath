---
tag: SQF5KY13XE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227579
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of points inside a given equilateral triangle $ABC$ with side $1$ or on its boundary. For any $M \in S, a_M, b_M, c_M$ denote the distances from $M$ to $BC,CA,AB$, respectively. Define
$$f(M) = a_M^3 (b_M - c_M) + b_M^3(c_M - a_M) + c_M^3(a_M - b_M).$$
**(a)** Describe the set $\{M \in S | f(M) \geq 0\}$ geometrically.

**(b)** Find the minimum and maximum values of $f(M)$ as well as the points in which these are attained.
