---
tag: G9JRMWAM60
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213964
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=156
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $D$ be the midpoint of the side $BC$ of a triangle $ABC$ and $AD$ intersect the circumcircle of $ABC$ for the second time at $E$. Let $P$ be the point symmetric to the point $E$ with respect to the point $D$ and $Q$ be the point of intersection of the lines $CP$ and $AB$. Prove that if $A,C,D,Q$ are concyclic, then the lines $BP$ and $AC$ are perpendicular.
