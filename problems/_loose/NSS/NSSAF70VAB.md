---
tag: NSSAF70VAB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Kazakhstan National Olympiad
    url: https://artofproblemsolving.com/community/c6h2828120
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45803
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kz-mo/2022
    source: hf-ai-mo-aops
    label: 2022 Kazakhstan National Olympiad
---
Given a cyclic quadrilateral $ABCD$ , let it's diagonals intersect at the point $O$ . Take the midpoints of $AD$ and $BC$ as $M$ and $N$ respectively. Take a point $S$ on the arc $AB$ not containing $C$ or $D$ such that $$ \angle SMA=\angle SNB $$ Prove that if the diagonals of the quadrilateral made from the lines $SM$ , $SN$ , $AB$ , and $CD$ intersect at the point $T$ , then $S$ , $O$ , and $T$ are collinear.
