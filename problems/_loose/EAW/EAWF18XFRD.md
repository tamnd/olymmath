---
tag: EAWF18XFRD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984790
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60489
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91247
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=78
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2004
    source: hf-ai-mo-aops
    label: 2004 Switzerland - Final Round
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland SMO Finalrunde
---
Let $a$ and $b$ be fixed positive numbers. Find the smallest possible depending on $a$ and $b$ value of the sum $$ \frac{x^2}{(ay + bz)(az + by)}+\frac{y^2}{(az + bx)(ax + bz)}+\frac{z^2}{(ax + by)(ay + bx)}, $$ where $x, y, z$ are positive real numbers.
