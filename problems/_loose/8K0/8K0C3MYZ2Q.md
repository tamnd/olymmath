---
tag: 8K0C3MYZ2Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162796
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=428
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2012
    source: hf-mathnet
    label: Slovenia National Math Olympiad 2012
---
Point $E$ lies on side $CD$ of square $ABCD$. Point $F$ lies on line $AB$, but not on segment $AB$, and satisfies $|BF|=|DE|$. Prove that lines $AC$ and $EF$ are perpendicular.
