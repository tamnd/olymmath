---
tag: JCGXCSAHKM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90587
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=54
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A cube $3 \times 3 \times 3$ is made of cheese and consists of 27 small cubical cheese pieces arranged in the $3 \times 3 \times 3$ pattern. A mouse is eating the cheese in such a way that it starts at one of the corners and eats smaller pieces one by one. After he finishes one piece, he moves to the adjacent piece (pieces are adjacent if they share a face). Is it possible that the last piece mouse has eaten is the central one?

Remark: Pieces don't fall down if a piece underneath is eaten first.
