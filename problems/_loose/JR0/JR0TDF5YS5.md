---
tag: JR0TDF5YS5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Azerbaijan National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3120427
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30747
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230086
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: az-mo/2016
    source: hf-ai-mo-aops
    label: 2016 Azerbaijan National Mathematical Olympiad
  - at: kurschak/1934
    source: hf-ai-mo-aops
    label: 1934 Eotvos Mathematical Competition
---
Let $A = \frac{1 \cdot 3 \cdot 5\cdot ... \cdot (2n-1)}{2 \cdot 4 \cdot 6 \cdot ... \cdot (2n)}$ Prove that in the infinite sequence $A, 2A, 4A, 8A, ..., 2^k A, ….$ only integers will be observed, eventually.
