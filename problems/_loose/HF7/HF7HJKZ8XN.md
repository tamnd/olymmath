---
tag: HF7HJKZ8XN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236221
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=29
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2010
    source: hf-mathnet
    label: Estonia Estonija 2010
---
Let $n$ be a positive integer. Find the largest integer $N$ for which there exists a set of $n$ weights such that it is possible to determine the mass of all bodies with masses of $1, 2, ..., N$ using a balance scale .
(i.e. to determine whether a body with unknown mass has a mass $1, 2, ..., N$, and which namely).
