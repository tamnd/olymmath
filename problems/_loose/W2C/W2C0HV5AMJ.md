---
tag: W2C0HV5AMJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230551
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=41
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 66th Belarusian Mathematical Olympiad
---
Let $K$ and $L$ be the centers of the excircles of a non-isosceles triangle $ABC$ opposite $B$ and $C$ respectively. Let $B_1$ and $C_1$ be the midpoints of the sides $AC$ and $AB$ respectively Let $M$ and $N$ be symmetric to $B$ and $C$ about $B_1$ and $C_1$ respectively.
Prove that the lines $KM$ and $LN$ meet on $BC$.
