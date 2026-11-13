---
tag: 93TW0FAJXA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163213
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=459
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
Let there be a triangle $A B C$. Denote by $D$ the intersection of the angle bisector of $\angle B A C$ and side $B C$, and by $E$ the intersection of the angle bisector of $\angle C B A$ and side $A C$. Suppose that $|C D|=|C E|$. Prove that in this case triangle $A B C$ is isosceles.
