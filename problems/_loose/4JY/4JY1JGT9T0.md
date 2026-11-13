---
tag: 4JY1JGT9T0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215236
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABCD$ be cyclic quadrilateral,let $\gamma$ be it's circumscribed circle and let $M$ be the midpoint of arc $AB$ of $\gamma$,which does not contain points $C,D$.The line that passes through $M$ and the intersection point of diagonals $AC,BD$,intersects $\gamma$ in $N\neq M$.
Let $P,Q$ be two points situated on $CD$,such that $\angle{AQD}=\angle{DAP}$ and $\angle{BPC}=\angle{CBQ}$.Prove that circles $\odot(NPQ)$ and $\gamma$ are tangent.
