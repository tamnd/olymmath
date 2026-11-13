---
tag: PK33AQE4BP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1980 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1897980
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27869
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1980 Tournament Of Towns
---
A finite set of line segments, of total length $18$ , belongs to a square of unit side length (we assume that the square includes its boundary and that a line segment includes its end points). The line segments are parallel to the sides of the square and may intersect one another. Prove that among the regions into which the square is divided by the line segments, at least one of these must have area not less than $0.01$ .

(A Berzinsh, Riga)
