---
tag: QR4B8ZR7NM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 New Zealand MO
    url: https://artofproblemsolving.com/community/c6h2687772
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49156
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154019
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/New_Zealand/train/0000.parquet#row=25
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nz-nzmo/2021
    source: hf-ai-mo-aops
    label: 2021 New Zealand MO
  - at: nz-nzmo
    source: hf-mathnet
    label: New Zealand NZMO Round Two
---
Let $ABCD$ be a convex quadrilateral such that $AB + BC = 2021$ and $AD = CD$ . We are also given that $\angle ABC = \angle CDA = 90^o$ . Determine the length of the diagonal $BD$ .
