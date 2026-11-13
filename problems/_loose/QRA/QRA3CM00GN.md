---
tag: QRA3CM00GN
kind: problem
type: answer
answer: ^{\frac{2}{3}}=n^{\frac{2}{3}}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190502
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The diagonals of rectangle $A B C D$ have length $d$. From vertex $D$ to diagonal $A C$, a perpendicular is dropped, intersecting $A C$ at point $E$. From point $E$, perpendiculars are dropped to sides $A B$ and $B C$, intersecting $A B$ and $B C$ at points $F$ and $G$, respectively. If $\overline{E F}=1, \overline{E G}=n$, prove that

$$
d^{\frac{2}{3}}=n^{\frac{2}{3}}+1
$$