---
tag: ENM5HQJ4D4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence Pn (x), n ∈ N of polynomials is defined as follows:
P0 (x) = x, P1 (x) = 4x³ + 3x
Pn+1 (x) = (4x² + 2)Pn (x) - Pn-1 (x), for all n ≥ 1
For every positive integer m, we consider the set A(m) = { Pn (m) | n ∈ N }. Show that the sets A(m) and A(m+4) have no common elements.
