---
tag: DWVVH1CG9T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77010
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=34
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic 63rd Czech and Slovak Mathematical Olympiad
---
We are given a triangle $A B C$ with incentre $I$. Suppose that there exists an intersection point $M$ of the line $A B$ and the perpendicular to $C I$ through $I$. Prove that the circumcirle of the triangle $A B C$ intersects the segment $C M$ in an interior point $N$ and that $N I \perp M C$.

(Peter Novotný)
