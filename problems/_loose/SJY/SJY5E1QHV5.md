---
tag: SJY5E1QHV5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 New Zealand MO
    url: https://artofproblemsolving.com/community/c6h3147696
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49184
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154031
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/New_Zealand/train/0000.parquet#row=50
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nz-nzmo/2023
    source: hf-ai-mo-aops
    label: 2023 New Zealand MO
  - at: nz-nzmo
    source: hf-mathnet
    label: New Zealand NZMO Round Two
---
Let $ABCD$ be a square (vertices labelled in clockwise order). Let $Z$ be any point on diagonal $AC$ between $A$ and $C$ such that $AZ > ZC$ . Points $X$ and $Y$ exist such that $AXY Z $ is a square (vertices labelled in clockwise order) and point $B$ lies inside $AXY Z$ . Let $M$ be the point of intersection of lines $BX$ and $DZ$ (extended if necessary). Prove that $C$ , $M$ and $Y$ are colinear
