---
tag: ZSM4A18FVG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1828607
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21966
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2015
    source: hf-ai-mo-aops
    label: 2015 Caucasus Mathematical Olympiad
---
Find the roots of the equation $(x-a)(x-b)=(x-c)(x-d)$ , if you know that $a+d=b+c=2015$ and $a \ne c$ (numbers $a, b, c, d$ are not given).
