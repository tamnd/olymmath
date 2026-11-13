---
tag: 3VEQ4AQPA1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247123
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=63
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. A Steiner tree associated with a finite set $S$ of points in the Euclidean $n$-space is a finite collection $T$ of straight-line segments in that space such that any two points in $S$ are joined by a unique path in $T$ , and its length is the sum of the segment lengths. Show that there exists a Steiner tree of length $1+(2^{n-1}-1)\sqrt{3}$ associated with the vertex set of a unit $n$-cube.
