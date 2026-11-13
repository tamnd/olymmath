---
tag: Y2CSXGECQE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163219
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=458
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
Let $A B C$ be a right triangle with a right angle at $C$. Given points $K, L$, and $M$ on the sides $C A, A B$, and $B C$ respectively, such that the angle $\angle M L K$ is right and $|K C|=|K L|$. Prove that the angle bisectors of $\angle A K L$ and $\angle L M B$ are parallel.
