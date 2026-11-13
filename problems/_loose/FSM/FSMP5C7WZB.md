---
tag: FSMP5C7WZB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Cuba MO
    url: https://artofproblemsolving.com/community/c6h3403850
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37533
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89265
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cu-mo/2014
    source: hf-ai-mo-aops
    label: 2014 Cuba MO
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
Let $a$ and $b$ be real numbers. It is known that the graph of the parabola $y =ax^2 +b$ cuts the graph of the curve $y = x+1/x$ in exactly three points. Prove that $3ab < 1$ .
