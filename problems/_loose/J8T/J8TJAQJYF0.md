---
tag: J8TJAQJYF0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1980 IMO
    url: https://artofproblemsolving.com/community/c6h5562
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23563
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225033
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imo/1980
    source: hf-ai-mo-aops
    label: 1980 IMO
---
Determine all positive integers $n$ such that the following statement holds: If a convex polygon with with $2n$ sides $A_1 A_2 \ldots A_{2n}$ is inscribed in a circle and $n-1$ of its $n$ pairs of opposite sides are parallel, which means if the pairs of opposite sides

$$(A_1 A_2, A_{n+1} A_{n+2}), (A_2 A_3, A_{n+2} A_{n+3}), \ldots , (A_{n-1} A_n, A_{2n-1} A_{2n})$$

are parallel, then the sides $$ A_n A_{n+1}, A_{2n} A_1$$ are parallel as well.
