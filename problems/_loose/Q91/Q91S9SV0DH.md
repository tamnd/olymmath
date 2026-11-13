---
tag: Q91S9SV0DH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1985 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1903355
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27960
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228309
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1985 Tournament Of Towns
---
A square is divided into rectangles.
A "chain" is a subset $K$ of the set of these rectangles such that there exists a side of the square which is covered by projections of rectangles of $K$ and such that no point of this side is a projection of two inner points of two inner points of two different rectangles of $K$ .
(a) Prove that every two rectangles in such a division are members of a certain "chain".
(b) Solve the similar problem for a cube, divided into rectangular parallelopipeds (in the definition of chain , replace "side" by"edge") .

(A.I . Golberg, V.A. Gurevich)
