---
tag: 1WCNNSHAX9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163160
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad
---
Let there be a square $A B C D$ and points $E$ and $F$ outside the square such that triangles $B E C$ and $C F D$ are equilateral. Let $G$ be the intersection of lines $B E$ and $F D$, and $H$ be a point such that quadrilateral $C E H F$ is a rhombus. Prove that points $G, E, H$, and $F$ lie on the same circle.
