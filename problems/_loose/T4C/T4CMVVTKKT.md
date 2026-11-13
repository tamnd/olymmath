---
tag: T4CMVVTKKT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Morocco National Olympiad
    url: https://artofproblemsolving.com/community/c6h403643
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6832
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208961
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=140
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
Find all positive integers n such that : $-2^{0}+2^{1}-2^{2}+2^{3}-2^{4}+...-(-2)^{n}=4^{0}+4^{1}+4^{2}+...+4^{2010}$
