---
tag: G3WSYVCG42
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79214
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all points in the plane $A, B, C, D$ we have

$$
A C \cdot B D \leq A D \cdot B C + A B \cdot C D
$$

with equality if and only if the points $A, B, C, D$ are concyclic or collinear in this order. The inequality is called Ptolemy's inequality.
