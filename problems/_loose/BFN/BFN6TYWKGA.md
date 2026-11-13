---
tag: BFN6TYWKGA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162800
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=429
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
Let $A B C D E$ be a cyclic pentagon in which $|C D|=|D E|$. Diagonals $A D$ and $B E$ intersect at point $K$, and diagonals $A C$ and $B D$ intersect at point $L$. Prove that lines $K L$ and $E C$ are parallel.
