---
tag: QJNQDANCBC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Morocco National Olympiad
    url: https://artofproblemsolving.com/community/c6h403691
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6840
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=12037
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ma-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Morocco National Olympiad
  - at: ua-umo/2010
    source: hf-mathnet
    label: Ukraine 50th Mathematical Olympiad in Ukraine, Third Round (January 23, 2010)
---
Solve in $\mathbb{R}$ the equation : $(x+1)^5 + (x+1)^4(x-1) + (x+1)^3(x-1)^2 +$ $ (x+1)^2(x-1)^3 + (x+1)(x-1)^4 + (x-1)^5 =$ $ 0$ .
