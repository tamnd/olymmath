---
tag: GVJKCS4BYB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Slovenia National Olympiad
    url: https://artofproblemsolving.com/community/c6h377560
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5685
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207830
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=328
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Slovenia National Olympiad
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad
---
Let $x,y$ and $z$ be real numbers such that $0 \leq x,y,z \leq 1.$ Prove that
$$xyz+(1-x)(1-y)(1-z) \leq 1.$$
When does equality hold?
