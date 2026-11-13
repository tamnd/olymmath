---
tag: Y78EDHG7XG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90319
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=5
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A B C$ be a triangle with incenter $I$ and circumcenter $O$ for which $B C<A B<$ $A C$. Let $D$ and $E$ be points in the interiors of sides $A B$ and $A C$, respectively, of a triangle $A B C$, such that $D B=B C=C E$. Prove that $\overline{D E} \perp \overline{I O}$.
