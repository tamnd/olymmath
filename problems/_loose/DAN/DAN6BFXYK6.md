---
tag: DAN6BFXYK6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Cono Sur Olympiad
    url: https://artofproblemsolving.com/community/c6h423493
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22242
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223423
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cono-sur/2007
    source: hf-ai-mo-aops
    label: 2007 Cono Sur Olympiad
---
Let $ABCDE$ be a convex pentagon that satisfies all of the following:

- There is a circle $\Gamma$ tangent to each of the sides.
- The lengths of the sides are all positive integers.
- At least one of the sides of the pentagon has length $1$ .
- The side $AB$ has length $2$ .

Let $P$ be the point of tangency of $\Gamma$ with $AB$ .

(a) Determine the lengths of the segments $AP$ and $BP$ .
(b) Give an example of a pentagon satisfying the given conditions.
