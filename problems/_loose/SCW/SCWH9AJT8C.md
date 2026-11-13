---
tag: SCWH9AJT8C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=62396
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=87
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Points $K, L, M$ and $N$ are the midpoints of the sides $AB, BC, CD$ and $DA$ respectively of the inscribed quadrilateral $ABCD$. Prove that the orthocenters of triangles $AKN, BKL, CLM$ and $DMN$ are the vertices of a parallelogram.
