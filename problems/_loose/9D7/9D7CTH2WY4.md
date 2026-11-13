---
tag: 9D7CTH2WY4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90921
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In triangle $\triangle A B C$, we have marked points $A_{1}$ on side $B C, B_{1}$ on side $A C$, and $C_{1}$ on side $A B$ so that $A A_{1}$ is an altitude, $B B_{1}$ is a median, and $C C_{1}$ is an angle bisector. It is known that $\triangle A_{1} B_{1} C_{1}$ is equilateral. Prove that $\triangle A B C$ is equilateral too.

(Note: A median connects a vertex of a triangle with the midpoint of the opposite side. Thus, for median $B B_{1}$ we know that $B_{1}$ is the midpoint of side $A C$ in $\triangle A B C$.)
