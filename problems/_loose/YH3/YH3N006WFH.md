---
tag: YH3N006WFH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179652
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 66th ROMANIAN MATHEMATICAL OLYMPIAD
---
Point $P$ is inside triangle $A B C$, and lines $A P, B P, C P$ intersect sides $B C, A C, A B$ at $A_{1}, B_{1}$, and $C_{1}$, respectively. It is known that

$$
s\left(P B A_{1}\right)+s\left(P C B_{1}\right)+s\left(P A C_{1}\right)=\frac{1}{2} s(A B C)
$$

where $s(X Y Z)$ denotes the area of triangle $X Y Z$. Show that $P$ lies on a median of triangle $A B C$.
